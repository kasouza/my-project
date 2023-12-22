import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Santana Cred',
    description: 'Crédito através da antecipação de Saldo FGTS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="font-montserrat text-gray-900">{children}</body>
        </html>
    )
}
