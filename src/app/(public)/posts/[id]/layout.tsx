export default function PostsIdLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}