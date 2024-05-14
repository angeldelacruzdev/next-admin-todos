import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <div className="-mx-6 px-6 py-4">
            <Link href={'/dashboard'} title="home">
                <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" width={150} height={150} alt="tailus logo" />
            </Link>
        </div>
    )
}
