import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const AuthSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type AuthSchemaType = z.infer<typeof AuthSchema>;

export function useAuthForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<AuthSchemaType>({
        resolver: zodResolver(AuthSchema),
    });

    return { register, handleSubmit, errors };
}