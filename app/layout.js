
import "public/assets/css/bondor.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {dm_sans} from '@/lib/font'
export const metadata = {
    title: 'Urban Express',
    description: 'Generated by Urban Express',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dm_sans.variable} `}>
            <body>{children}</body>
        </html>
    )
}
