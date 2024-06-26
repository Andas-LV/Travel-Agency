import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./autentication.module.css";
import Image from "next/image";

export default function LoginBtn() {
    const { data: session } = useSession() ?? {};

    if (session) {
        const img = session.user?.image?.toString() ?? '';

        return (
            <div>
                Signed in as {session.user?.name} <br />

                <Image
                    src={img}
                    alt="User Image"
                    width={50}
                    height={50}
                    className={styles.profileImg}
                />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }
    return (
        <div>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    );
}