import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Horavi</h2>
            <p className="text-gray-400">Unlock your potential with Horavi's extensive resources. Start your journey with us today!</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/about"  className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services"  className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact"  className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Learning Street, Education City, 56789</p>
            <p className="text-gray-400">Email: info@horavi.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com">
                  <Image src="/images/facebook-icon.png" alt="Facebook" width={24} height={24} className="hover:opacity-75 transition" />
              </Link>
              <Link href="https://twitter.com">
                  <Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} className="hover:opacity-75 transition" />
              
              </Link>
              <Link href="https://instagram.com">
                  <Image src="/images/instagram-icon.png" alt="Instagram" width={24} height={24} className="hover:opacity-75 transition" />
               
              </Link>
              <Link href="https://linkedin.com">
                  <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} className="hover:opacity-75 transition" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Horavi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
