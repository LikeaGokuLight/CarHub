import React from "react";
import "./globals.css";
import type {Metadata} from "next";
import {Footer, Navbar} from "@/app/components";


export const metadata = {
    title: "Car Hub",
    description: "Explore the premier car exhibition app in the world.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={"relative"}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
