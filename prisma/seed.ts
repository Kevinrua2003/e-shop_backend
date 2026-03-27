import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASS;

  if (!email || !password) {
    console.error(
      'ADMIN_USER and ADMIN_PASS environment variables are required',
    );
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      hashedPassword,
      role: Role.ADMIN,
    },
    create: {
      email,
      name: 'Admin',
      hashedPassword,
      role: Role.ADMIN,
    },
  });

  console.log(`Admin user created/updated: ${admin.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
