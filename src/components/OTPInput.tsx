'use client';

import React, { useRef, useState, useEffect, KeyboardEvent, ClipboardEvent } from 'react';
import { cn } from '@/components/ui/utils';

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export default function OTPInput({
  length = 6,
  value,
  onChange,
  disabled = false,
  className,
}: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Sync external value with internal state
  useEffect(() => {
    if (value) {
      const otpArray = value.split('').slice(0, length);
      const paddedArray = [...otpArray, ...Array(length - otpArray.length).fill('')];
      setOtp(paddedArray);
    } else {
      setOtp(Array(length).fill(''));
    }
  }, [value, length]);

  const handleChange = (index: number, val: string) => {
    // Only allow digits
    const sanitizedValue = val.replace(/\D/g, '');

    if (sanitizedValue.length === 0) {
      // Handle deletion
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      onChange(newOtp.join(''));
      return;
    }

    if (sanitizedValue.length === 1) {
      // Single digit input
      const newOtp = [...otp];
      newOtp[index] = sanitizedValue;
      setOtp(newOtp);
      onChange(newOtp.join(''));

      // Move to next input
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (sanitizedValue.length > 1) {
      // Handle paste or multiple digits
      handlePasteData(sanitizedValue, index);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        // Move to previous input if current is empty
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        onChange(newOtp.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');
    handlePasteData(pasteData, 0);
  };

  const handlePasteData = (pasteData: string, startIndex: number) => {
    const newOtp = [...otp];
    const digits = pasteData.slice(0, length - startIndex).split('');

    digits.forEach((digit, i) => {
      if (startIndex + i < length) {
        newOtp[startIndex + i] = digit;
      }
    });

    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Focus the next empty input or the last filled input
    const nextEmptyIndex = newOtp.findIndex((val, idx) => idx >= startIndex && val === '');
    const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    // Select the content when focused
    inputRefs.current[index]?.select();
  };

  return (
    <div className={cn('flex gap-2', className)}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          onFocus={() => handleFocus(index)}
          disabled={disabled}
          className={cn(
            'w-12 h-12 text-center text-lg font-semibold rounded-md border-2 transition-all outline-none',
            'border-gray-300 bg-white text-gray-900',
            'focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20',
            'hover:border-gray-400',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50',
            digit && 'border-[#cc0000]'
          )}
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  );
}
