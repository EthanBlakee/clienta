import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();

  const lead = await prisma.lead.update({
    where: { id: Number(params.id) },
    data: {
      name: body.name,
      contact: body.contact,
      answers: body.answers,
      status: body.status,
      appointmentSlot: body.appointmentSlot
    }
  });

  return NextResponse.json({ lead });
}
