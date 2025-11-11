'use client';

import React, { useState } from 'react';
import svgPaths from "@/imports/svg-m0otgnt9nn";
import imgToq5TsScHq68ZsCqZ1J9EvnD7GsJpg from "@/assets/9b0ae3954e9319d29745ea127c2bf2eaa99b7cba.png";
import { PageHeader } from './homepage/PageHeader';
import Footer from './homepage/Footer';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="pt-16 md:pt-[104px]">
        {/* Page Header */}
        <PageHeader pageName="Contact us" />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 pb-8">
        {/* Contact Info Section */}
        <div className="space-y-6 py-6">
          {/* Editorial Contact */}
          <div className="text-[15px] leading-[22px] text-[#020a1c] font-['Satoshi:Regular',_sans-serif]">
            <p className="mb-0">Have a story that could make headlines? We</p>
            <p className="mb-0">want to hear from you. Reach our editorial</p>
            <p className="mb-0">team at <span className="text-[#657285]">content@newsflash.com</span>.</p>
          </div>

          {/* Media Rights */}
          <div className="text-[15px] leading-[22px] text-[#020a1c] font-['Satoshi:Regular',_sans-serif]">
            <p className="mb-0">For inquiries regarding the rights to reproduce</p>
            <p className="mb-0">or feature our content, connect with us at</p>
            <p className="mb-0"><span className="text-[#657285]">media@newsflash.com</span>.</p>
          </div>

          {/* Advertising */}
          <div className="text-[15px] leading-[22px] text-[#020a1c] font-['Satoshi:Regular',_sans-serif]">
            <p className="mb-0">Interested in advertising or promotional</p>
            <p className="mb-0">opportunities on NewsFlash? Contact</p>
            <p className="mb-0"><span className="text-[#657285]">ads@newsflash.com</span> for more details, or you</p>
            <p>can also contact us via the form.</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(203,213,225,0.35)]" />

          {/* Phone */}
          <div className="space-y-2">
            <div className="text-[#020a1c] text-[16.3px] leading-[22.6px] font-['Satoshi:Medium',_sans-serif]">
              1-234-567-8910
            </div>
            <div className="text-[#657285] text-[14.8px] leading-[22px] font-['Satoshi:Regular',_sans-serif]">
              <p className="mb-0">Monday - Friday</p>
              <p>6am – 6pm</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(203,213,225,0.35)]" />

          {/* Email */}
          <div className="space-y-2">
            <div className="text-[#020a1c] text-[16.7px] leading-[22.6px] font-['Satoshi:Medium',_sans-serif]">
              info@newsflash.com
            </div>
            <div className="text-[#657285] text-[14.6px] leading-[22px] font-['Satoshi:Regular',_sans-serif]">
              We will endeavour to respond within 48 hours.
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(203,213,225,0.35)]" />

          {/* Address */}
          <div className="space-y-2">
            <div className="text-[#020a1c] text-[16.3px] leading-[22.6px] font-['Satoshi:Medium',_sans-serif]">
              Address
            </div>
            <div className="text-[#657285] text-[14.6px] leading-[22px] font-['Satoshi:Regular',_sans-serif]">
              <p className="mb-0">1261 Lincoln Street,</p>
              <p>San Francisco, CA 94134</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(203,213,225,0.35)]" />
        </div>

        {/* Banner Image */}
        <div className="rounded-lg overflow-hidden h-[200px] mb-6 relative">
          <img
            src={imgToq5TsScHq68ZsCqZ1J9EvnD7GsJpg.src}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
            <p className="text-white text-[15px] leading-[22px] font-['Satoshi:Regular',_sans-serif] max-w-[340px]">
              Discover how NewsFlash can help you connect with 60 Million readers monthly, offering award-winning content and precision-targeted campaigns to boost your reach.
            </p>
          </div>
        </div>

        {/* Form Description */}
        <div className="mb-6">
          <p className="text-[#020a1c] text-[15px] leading-[22px] font-['Satoshi:Regular',_sans-serif]">
            Whether you need more information, have specific queries or are looking for further assistance, our team is here to help. Simply complete the form and we'll get back to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-[#657285] text-[13.6px] leading-[18.2px] font-['Satoshi:Bold',_sans-serif] font-bold">
              Full Name
            </label>
            <div className="bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)]">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="David Brown"
                className="w-full h-[45px] px-3 bg-transparent text-[#657285] text-[12.9px] font-['Satoshi:Regular',_sans-serif] outline-none placeholder-[#657285]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-[#657285] text-[13.3px] leading-[18.2px] font-['Satoshi:Bold',_sans-serif] font-bold">
              Email
            </label>
            <div className="bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="david@yourmail.com"
                className="w-full h-[45px] px-3 bg-transparent text-[#657285] text-[13px] font-['Satoshi:Regular',_sans-serif] outline-none placeholder-[#657285]"
              />
            </div>
          </div>

          {/* Department */}
          <div className="space-y-2">
            <label className="block text-[#657285] text-[13.3px] leading-[18.2px] font-['Satoshi:Bold',_sans-serif] font-bold">
              Department
            </label>
            <div className="bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)] relative">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full h-[45px] px-3 bg-transparent text-[#657285] text-[12.5px] font-['Satoshi:Regular',_sans-serif] outline-none appearance-none cursor-pointer"
              >
                <option value="">Select…</option>
                <option value="editorial">Editorial</option>
                <option value="media">Media Rights</option>
                <option value="advertising">Advertising</option>
                <option value="general">General Inquiry</option>
              </select>
              {/* Dropdown Icon */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 11 6">
                  <path d={svgPaths.p38d60d00} stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="block text-[#657285] text-[13px] leading-[18.2px] font-['Satoshi:Bold',_sans-serif] font-bold">
              Subject
            </label>
            <div className="bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)]">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full h-[45px] px-3 bg-transparent text-[#657285] text-[12.9px] font-['Satoshi:Regular',_sans-serif] outline-none placeholder-[#657285]"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-[#657285] text-[12.9px] leading-[18.2px] font-['Satoshi:Bold',_sans-serif] font-bold">
              Message
            </label>
            <div className="bg-[#f7fafc] rounded-[10px] border border-[rgba(203,213,225,0.3)]">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="w-full p-3 bg-transparent text-[#657285] text-[13px] font-['Satoshi:Regular',_sans-serif] outline-none placeholder-[#657285] resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[45px] bg-[#cc0000] rounded-[10px] text-white text-[14px] leading-[16.8px] font-['Satoshi:Semi_Bold',_sans-serif] font-semibold hover:bg-[#b30000] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="content-stretch flex flex-col items-center relative w-full">
          <div className="h-[1333.94px] relative shrink-0 w-[1320px]" data-name="Container">
            {/* Vertical Divider */}
            <div className="absolute content-stretch flex flex-col items-start left-[389.73px] top-[40px] w-px" data-name="Container">
              <div className="bg-[rgba(203,213,225,0.35)] h-[1213.94px] shrink-0 w-full" data-name="Dark" />
            </div>

            {/* Right Content */}
            <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[432.73px] overflow-clip right-[24px] top-[40px]" data-name="Container">
              {/* Photo + Text */}
              <div className="box-border content-stretch flex flex-col h-[500px] items-start justify-end overflow-clip pl-[32px] pr-[311.75px] py-[32px] relative rounded-[8px] shrink-0" data-name="Photo + Text">
                <div className="absolute inset-0 rounded-[8px]" data-name="Toq5TsScHq68ZsCqZ1j9EvnD7Gs.jpg">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                    <img alt="" className="absolute h-full left-[-2.97%] max-w-none top-0 w-[102.97%]" src={imgToq5TsScHq68ZsCqZ1J9EvnD7GsJpg.src} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[519.52px]" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[15px] text-white w-full">
                      <p className="mb-0">{`Discover how NewsFlash can help you connect with 60 Million readers `}</p>
                      <p className="mb-0">{`monthly, offering award-winning content and precision-targeted `}</p>
                      <p>campaigns to boost your reach.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="content-stretch flex gap-[42px] items-start overflow-clip relative shrink-0 w-full" data-name="Form">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273.75px]" data-name="Container">
                  <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[15px] text-nowrap whitespace-pre">
                    <p className="mb-0">{`Whether you need more information, `}</p>
                    <p className="mb-0">{`have specific queries or are looking for `}</p>
                    <p className="mb-0">{`further assistance, our team is here to `}</p>
                    <p className="mb-0">{`help. Simply complete the form and `}</p>
                    <p>{`we'll get back to you.`}</p>
                  </div>
                </div>

                {/* Form */}
                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[547.52px]" data-name="Container → Form">
                  <form onSubmit={handleSubmit} className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Form">
                    <div className="h-[665.94px] overflow-clip relative shrink-0 w-full" data-name="Form">
                      {/* Full Name */}
                      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[-1px]" data-name="Label">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Satoshi:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.6px] text-nowrap">
                              <p className="leading-[18.2px] whitespace-pre">Full Name</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f7fafc] content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
                          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
                            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex items-start justify-center px-[12px] py-[14px] relative size-full">
                                <input
                                  type="text"
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  placeholder="David Brown"
                                  className="w-full bg-transparent font-['Satoshi:Regular',_sans-serif] font-normal text-[#657285] text-[12.9px] outline-none placeholder-[#657285]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
                            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[92.19px]" data-name="Label">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Satoshi:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.3px] text-nowrap">
                              <p className="leading-[18.2px] whitespace-pre">Email</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f7fafc] content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
                          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
                            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex items-start justify-center px-[12px] py-[14px] relative size-full">
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="david@yourmail.com"
                                  className="w-full bg-transparent font-['Satoshi:Regular',_sans-serif] font-normal text-[#657285] text-[13px] outline-none placeholder-[#657285]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
                            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                          </div>
                        </div>
                      </div>

                      {/* Department */}
                      <div className="absolute content-stretch flex flex-col gap-[9.99px] items-start left-0 right-0 top-[185.38px]" data-name="Label">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Satoshi:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.3px] text-nowrap">
                              <p className="leading-[18.2px] whitespace-pre">Department</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f7fafc] h-[45px] relative rounded-[10px] shrink-0 w-full" data-name="Background">
                          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col h-[45px] items-start justify-center pl-0 pr-[12px] py-0 relative w-full">
                              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Options">
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border content-stretch flex items-center justify-center p-[12px] relative size-full">
                                    <select
                                      name="department"
                                      value={formData.department}
                                      onChange={handleChange}
                                      className="w-full bg-transparent font-['Satoshi:Regular',_sans-serif] font-normal text-[#657285] text-[12.5px] outline-none appearance-none cursor-pointer"
                                    >
                                      <option value="">Select…</option>
                                      <option value="editorial">Editorial</option>
                                      <option value="media">Media Rights</option>
                                      <option value="advertising">Advertising</option>
                                      <option value="general">General Inquiry</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              {/* Dropdown Icon */}
                              <div className="absolute bottom-0 right-0 top-0 w-[38px]" data-name="Mask Group">
                                <div className="absolute bg-[#f7fafc] bottom-0 right-0 top-0 w-[38px]" data-name="Background" />
                                <div className="absolute bottom-0 content-stretch flex flex-col items-start right-0 top-0 w-[38px]" data-name="Mask">
                                  <div className="box-border content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip pl-[10px] pr-[12px] py-[14.5px] relative shrink-0 w-[38px]" data-name="image fill">
                                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
                                      <div className="absolute inset-[37.5%_21.88%_34.38%_21.88%]" data-name="Vector">
                                        <div className="absolute inset-[-16.67%_-8.33%]" style={{ "--stroke-0": "rgba(153, 153, 153, 1)" } as React.CSSProperties}>
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
                                            <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute inset-0 rounded-[10px]" data-name="Border">
                                <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[278.56px]" data-name="Label">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Satoshi:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
                              <p className="leading-[18.2px] whitespace-pre">Subject</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f7fafc] content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
                          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
                            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="box-border content-stretch flex items-start justify-center px-[12px] py-[14px] relative size-full">
                                <input
                                  type="text"
                                  name="subject"
                                  value={formData.subject}
                                  onChange={handleChange}
                                  placeholder="Subject"
                                  className="w-full bg-transparent font-['Satoshi:Regular',_sans-serif] font-normal text-[#657285] text-[12.9px] outline-none placeholder-[#657285]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
                            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[371.75px]" data-name="Label">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Satoshi:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.9px] text-nowrap">
                              <p className="leading-[18.2px] whitespace-pre">Message</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f7fafc] content-stretch flex flex-col items-start min-h-[200px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
                          <div className="h-[200px] min-h-[200px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Textarea">
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Message"
                              className="absolute inset-0 w-full h-full p-[12px] bg-transparent font-['Satoshi:Regular',_sans-serif] font-normal text-[#657285] text-[13px] outline-none placeholder-[#657285] resize-none"
                            />
                          </div>
                          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
                            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="absolute content-stretch flex flex-col h-[45px] items-start justify-center left-0 right-0 top-[620.94px]" data-name="Container">
                        <button
                          type="submit"
                          className="basis-0 bg-[#cc0000] box-border content-stretch flex grow items-center justify-center min-h-px min-w-px pb-[14.11px] pt-[13.09px] px-0 relative rounded-[10px] shrink-0 w-full hover:bg-[#b30000] transition-colors"
                          data-name="Button - Default"
                        >
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="box-border content-stretch flex flex-col items-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                              <div className="flex flex-col font-['Satoshi:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                                <p className="leading-[16.8px] whitespace-pre">Submit</p>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Left Content - Sticky Sidebar */}
            <div className="absolute bottom-0 h-[calc(100%-40px)] left-[24px] pointer-events-none right-[972.27px] top-[40px]">
              <div className="h-[642px] pointer-events-auto sticky top-0" data-name="Left Content">
                {/* Main Text Content */}
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Container">
                  <div className="h-[264px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[66px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[15px] top-[33px] translate-y-[-50%] w-[314.4px]">
                      <p className="mb-0">{`Have a story that could make headlines? We `}</p>
                      <p className="mb-0">{`want to hear from you. Reach our editorial `}</p>
                      <p>{`team at `}</p>
                    </div>
                    <div className="absolute content-stretch flex items-start left-[56.73px] top-[44px]" data-name="Component 2">
                      <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
                        <p className="leading-[22px] whitespace-pre">content@newsflash.com</p>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[227.8px] not-italic text-[#020a1c] text-[16px] top-[55px] translate-y-[-50%] w-[8.83px]">
                      <p className="leading-[22px]">{`. `}</p>
                    </div>
                    <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[15px] top-[110px] translate-y-[-50%] w-[326.98px]">
                      <p className="mb-0">{`For inquiries regarding the rights to reproduce `}</p>
                      <p>{`or feature our content, connect with us at `}</p>
                    </div>
                    <div className="absolute content-stretch flex items-start left-0 top-[132px]" data-name="Component 2">
                      <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
                        <p className="leading-[22px] whitespace-pre">media@newsflash.com</p>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[160.8px] not-italic text-[#020a1c] text-[16px] top-[143px] translate-y-[-50%] w-[8.83px]">
                      <p className="leading-[22px]">{`. `}</p>
                    </div>
                    <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[15px] top-[198px] translate-y-[-50%] w-[279.06px]">
                      <p className="mb-0">{`Interested in advertising or promotional `}</p>
                      <p>{`opportunities on NewsFlash? Contact `}</p>
                    </div>
                    <div className="absolute content-stretch flex items-start left-0 top-[220px]" data-name="Component 2">
                      <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
                        <p className="leading-[22px] whitespace-pre">ads@newsflash.com</p>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[142.41px] not-italic text-[#020a1c] text-[15.1px] top-[231px] translate-y-[-50%] w-[170.38px]">
                      <p className="leading-[22px]">{` for more details, or you `}</p>
                    </div>
                    <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14.6px] top-[253px] translate-y-[-50%] w-[227px]">
                      <p className="leading-[22px]">can also contact us via the form.</p>
                    </div>
                  </div>
                </div>

                {/* Divider Lines */}
                <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[288px]" data-name="Container">
                  <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />
                </div>
                <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[413px]" data-name="Container">
                  <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />
                </div>
                <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[516px]" data-name="Container">
                  <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />
                </div>
                <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[641px]" data-name="Container">
                  <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />
                </div>

                {/* Contact Info - Phone */}
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip right-0 top-[313px]" data-name="Aside - Call">
                  <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Phone Number">
                    <div className="shrink-0 size-[24px]" data-name="Container" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Satoshi:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.3px] text-nowrap">
                          <p className="leading-[22.6px] whitespace-pre">1-234-567-8910</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Days + Hours">
                    <div className="content-stretch flex flex-col items-start min-w-[323.73px] relative shrink-0" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap whitespace-pre">
                          <p className="mb-0">Monday - Friday</p>
                          <p>6am – 6pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info - Email */}
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip right-0 top-[438px]" data-name="Aside - Email">
                  <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Phone Number">
                    <div className="shrink-0 size-[24px]" data-name="Container" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Satoshi:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.7px] text-nowrap">
                          <p className="leading-[22.6px] whitespace-pre">info@newsflash.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Days + Hours">
                    <div className="content-stretch flex flex-col items-start min-w-[323.73px] relative shrink-0" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap whitespace-pre">
                          <p className="mb-0">We will endeavour to respond </p>
                          <p>within 48 hours.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info - Address */}
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip right-0 top-[541px]" data-name="Aside - Address">
                  <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Phone Number">
                    <div className="shrink-0 size-[24px]" data-name="Container" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Satoshi:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.3px] text-nowrap">
                          <p className="leading-[22.6px] whitespace-pre">Address</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Days + Hours">
                    <div className="content-stretch flex flex-col items-start min-w-[323.73px] relative shrink-0" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap whitespace-pre">
                          <p className="mb-0">1261 Lincoln Street,</p>
                          <p>San Francisco, CA 94134</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
