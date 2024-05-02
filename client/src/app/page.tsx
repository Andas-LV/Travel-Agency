"use client"
import MainPage from "@/pages/MainPage/MainPage";
import AuthProvider from "@/components/AuthProvider";

const Page = () => {
    return (
        <AuthProvider>
            <MainPage/>
        </AuthProvider>
    );
};

export default Page;