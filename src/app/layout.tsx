import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Titillium_Web({
	weight: ["300", "400", "600", "700", "900"],
	preload: true,
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Vilas Chauvhan",
	description: "Portfolio website of Vilas Chauvhan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TooltipProvider>
					{children}
				</TooltipProvider>
			</body>
		</html>
	);
}
