import { NextResponse } from 'next/server';
import { fetchCategories } from '@/lib/fetchCategories';

export async function GET() {
  try {
    const categories = await fetchCategories();
    return NextResponse.json({
      success: true,
      categories
    });
  } catch (error) {
    console.error('Error in categories API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
