import type {Metadata} from "next";
import {Inter, DM_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {ClerkProvider} from "@clerk/nextjs";

const font = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "OrchestrAI: AI-Powered Workflow Automation",
    description: "OrchestrAI empowers users to automate workflows and leverage a suite of AI tools. Ideal for building low-code chatbots and integration platforms for efficient task management and enhanced customer support."
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            <html lang="en">
            <body className={font.className}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>

            </body>
            </html>
        </ClerkProvider>
    );
}
