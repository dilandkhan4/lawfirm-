const { PrismaClient } = require('@prisma/client')
const crypto = require('crypto')

const prisma = new PrismaClient()

// Simple password hashing function using Node.js built-in crypto
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

async function main() {
  console.log('Start seeding...')

  // Create users with properly hashed passwords
  const hashedPassword = hashPassword('pass123')
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@lawstick.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@lawstick.com',
      password: hashedPassword,
      role: 'admin',
    },
  })

  const lawyer1User = await prisma.user.upsert({
    where: { email: 'john.doe@lawstick.com' },
    update: {},
    create: {
      name: 'John Doe',
      email: 'john.doe@lawstick.com',
      password: hashedPassword,
      role: 'lawyer',
    },
  })

  const lawyer2User = await prisma.user.upsert({
    where: { email: 'jane.smith@lawstick.com' },
    update: {},
    create: {
      name: 'Jane Smith',
      email: 'jane.smith@lawstick.com',
      password: hashedPassword,
      role: 'lawyer',
    },
  })

  // Create lawyers
  const lawyer1 = await prisma.lawyer.upsert({
    where: { userId: lawyer1User.id },
    update: {},
    create: {
      userId: lawyer1User.id,
      bio: 'Experienced criminal defense attorney with over 10 years of practice.',
      specialty: 'Criminal Law',
    },
  })

  const lawyer2 = await prisma.lawyer.upsert({
    where: { userId: lawyer2User.id },
    update: {},
    create: {
      userId: lawyer2User.id,
      bio: 'Corporate law specialist focusing on business transactions and compliance.',
      specialty: 'Corporate Law',
    },
  })

  // Create sample clients
  const client1 = await prisma.client.upsert({
    where: { email: 'client1@example.com' },
    update: {},
    create: {
      name: 'Alice Johnson',
      email: 'client1@example.com',
      phone: '+1234567890',
      address: '123 Main St, City, State',
    },
  })

  const client2 = await prisma.client.upsert({
    where: { email: 'client2@example.com' },
    update: {},
    create: {
      name: 'Bob Wilson',
      email: 'client2@example.com',
      phone: '+1987654321',
      address: '456 Oak Ave, City, State',
    },
  })

  // Create sample services (using findFirst and create pattern to avoid hardcoded IDs)
  const existingService1 = await prisma.service.findFirst({
    where: { name: 'Legal Consultation' }
  })
  const service1 = existingService1 || await prisma.service.create({
    data: {
      name: 'Legal Consultation',
      description: 'Initial consultation to discuss your legal matter',
      price: 150.00,
    },
  })

  const existingService2 = await prisma.service.findFirst({
    where: { name: 'Document Review' }
  })
  const service2 = existingService2 || await prisma.service.create({
    data: {
      name: 'Document Review',
      description: 'Professional review of legal documents',
      price: 200.00,
    },
  })

  const existingService3 = await prisma.service.findFirst({
    where: { name: 'Court Representation' }
  })
  const service3 = existingService3 || await prisma.service.create({
    data: {
      name: 'Court Representation',
      description: 'Full legal representation in court proceedings',
      price: 500.00,
    },
  })

  console.log('Seeding finished.')
  console.log('Created users:', { adminUser, lawyer1User, lawyer2User })
  console.log('Created lawyers:', { lawyer1, lawyer2 })
  console.log('Created clients:', { client1, client2 })
  console.log('Created services:', { service1, service2, service3 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })