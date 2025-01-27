import "./styles/DottedBall.css";
import "./styles/InputBox.css";
import "./styles/SubmitButton.css";
import "./styles/ResponseDisplay.css";

export const metadata = {
  title: "DeepSeekR1",
  description: "Cyberpunk Query Interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
        <header className="w-full py-4 bg-gradient-to-r from-purple-800 to-blue-800 text-center text-3xl font-bold text-white shadow-md">
          DeepSeek-R1 Query
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="w-full py-4 bg-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DeepSeekR1. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
