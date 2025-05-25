// src/pages/SignUp.tsx
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast"; // Assuming you're using shadcn toast
import { Leaf } from "lucide-react";

// Define the validation schema using Zod
const signUpSchema = z.object({
  fullName: z.string().min(3, { message: "Nama lengkap minimal 3 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  password: z.string().min(8, { message: "Password minimal 8 karakter." }),
  confirmPassword: z.string().min(8, { message: "Konfirmasi password minimal 8 karakter." }),
  userType: z.enum(["PETANI", "PEMBELI", "EDUKATOR"], {
    errorMap: () => ({ message: "Silakan pilih tipe pengguna." }),
  }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui syarat dan ketentuan.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password dan konfirmasi password tidak cocok.",
  path: ["confirmPassword"], // Set error on confirmPassword field
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: undefined, // Or a default like "PEMBELI"
      agreeTerms: false,
    },
  });

  // Handle form submission
  const onSubmit = async (data: SignUpFormValues) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // On successful submission (replace with actual logic)
    toast({
      title: "Pendaftaran Berhasil!",
      description: `Selamat datang, ${data.fullName}! Akun Anda telah dibuat.`,
      variant: "default", // or "success" if you have that variant
    });
    navigate("/login"); // Redirect to login page after successful registration

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-160px)]"> {/* Adjust min-height based on your Navbar/Footer height */}
        <Card className="w-full max-w-lg shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto bg-tani-green text-white p-3 rounded-full w-fit mb-4">
              <Leaf size={32} />
            </div>
            <CardTitle className="text-3xl font-bold text-tani-green">Buat Akun Baru</CardTitle>
            <CardDescription>
              Bergabunglah dengan IPINI dan dukung pertanian Indonesia.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name Field */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan nama lengkap Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="contoh@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Masukkan password Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Konfirmasi Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Ulangi password Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* User Type Field */}
                <FormField
                  control={form.control}
                  name="userType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Saya Mendaftar Sebagai</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih tipe pengguna" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="PETANI">Petani</SelectItem>
                          <SelectItem value="PEMBELI">Pembeli</SelectItem>
                          <SelectItem value="EDUKATOR">Edukator</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Agree to Terms Field */}
                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Saya menyetujui <Link to="/syarat-ketentuan" className="text-tani-blue hover:underline">Syarat & Ketentuan</Link> yang berlaku.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-tani-green hover:bg-tani-green/90" disabled={isSubmitting}>
                  {isSubmitting ? "Mendaftar..." : "Daftar Sekarang"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Sudah punya akun?{" "}
              <Link to="/login" className="font-medium text-tani-blue hover:underline">
                Masuk di sini
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default SignUpPage;
