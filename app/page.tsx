import {Link} from "@nextui-org/link";

export default function Home() {
    return (
        <div className="container px-4 py-4 flex items-center justify-center">
            <Link href="/calculator">Перейти к калькулятору</Link>
        </div>
    );
}
