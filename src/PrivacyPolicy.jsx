import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container px-[5%] py-24 md:py-32 lg:py-40 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-serif mb-8 text-yu-black">Privacy Policy</h1>
            <p className="text-yu-black/70 mb-4">Last Updated: February 19, 2026</p>

            <section className="mb-8">
                <h2 className="text-2xl font-bold font-serif mb-4 text-yu-black">1. Introduction</h2>
                <p className="text-yu-black/70 mb-4 leading-relaxed">
                    yuunChloe LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website yuunchloe.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                </p>
            </section>

             <section className="mb-8">
                <h2 className="text-2xl font-bold font-serif mb-4 text-yu-black">2. Information We Collect</h2>
                <p className="text-yu-black/70 mb-4 leading-relaxed">
                    We collect several types of information from and about users of our Website, including information:
                </p>
                <ul className="list-disc pl-6 text-yu-black/70 leading-relaxed">
                    <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information");</li>
                    <li>That is about you but individually does not identify you; and/or</li>
                    <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold font-serif mb-4 text-yu-black">3. How We Use Your Information</h2>
                <p className="text-yu-black/70 mb-4 leading-relaxed">
                    We use information that we collect about you or that you provide to us, including any personal information:
                </p>
                 <ul className="list-disc pl-6 text-yu-black/70 leading-relaxed">
                    <li>To present our Website and its contents to you.</li>
                    <li>To provide you with information, products, or services that you request from us.</li>
                    <li>To fulfill any other purpose for which you provide it.</li>
                    <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                </ul>
            </section>

             <section className="mb-8">
                <h2 className="text-2xl font-bold font-serif mb-4 text-yu-black">4. Contact Information</h2>
                <p className="text-yu-black/70 mb-4 leading-relaxed">
                    To ask questions or comment about this privacy policy and our privacy practices, contact us at: contact@yuunchloe.com.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
