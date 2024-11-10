import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'SEO Title' + (new Date()).toString(),
  description: 'SEO Title',
 };
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Root Name</h1>
      {children}
    </div>
  );
}