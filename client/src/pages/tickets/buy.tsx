import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ticketType {
    city: string
    person: number
    date: string | undefined
}

export default function buy({date, person, city}: ticketType) {
    const { isAuthenticated } = getKindeServerSession();
    const [isLogged, setIsLogged] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authStatus = await isAuthenticated();
                setIsLogged(authStatus);
                if (!authStatus) {
                    await router.push('/auth/login');
                }
            } catch (error) {
                console.error("Error checking authentication status:", error);
            }
        };
        checkAuth().then(r => console.log(r));
    }, []);

    if (isLogged === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>TICKETS</h1>
            {date} - {person} - {city}
        </div>
    )
}
