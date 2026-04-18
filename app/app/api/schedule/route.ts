import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const slots = [
    '2026-04-20T09:00:00Z',
    '2026-04-20T11:00:00Z',
    '2026-04-20T14:00:00Z',
    '2026-04-21T10:00:00Z'
  ];

  return NextResponse.json({ slots });
}

export async function POST(req: Request) {
  const { leadId, slot } = await req.json();

  const lead = await prisma.lead.update({
    where: { id: Number(leadId) },
    data: { status: 'booked', appointmentSlot: slot }
  });

  return NextResponse.json({ lead });
}
