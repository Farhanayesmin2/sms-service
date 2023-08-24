// import { SiDataverse } from "react-icons/si";
// import { IoCallSharp } from "react-icons/io5";
// import {
// 	BiLogoFacebookCircle,
// 	BiLogoGmail,
// 	BiLogoLinkedinSquare,
// } from "react-icons/bi";
const Footer = () => {
	return (
		<div>
			<footer className="w-full flex items-center pt-7 pl-7 pr-7 flex-col pb-7 bg-black">
				<div className="w-full flex max-w-1200px border-b-1 border-gray-700 flex-col pb-5 justify-between">
					<div className="w-1/3 flex flex-col items-start mr-2 flex-wrap">
						<span className="text-white text-20px font-bold mb-1.5">
							Subscribe to our newsletter
						</span>
						<div className="w-full h-66px flex items-center pt-0.5 pl-1.5 rounded-50px mb-1px pr-0.5 flex-row pb-0.5 justify-between bg-white">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-60% outline-none text-14px border-0"
							/>
							<div className="cursor-pointer flex items-center pt-16px transition duration-300 pl-32px rounded-56px pr-32px flex-row pb-16px justify-start bg-blue-600">
								<span className="text-white text-14px font-semibold">
									Subscribe
								</span>
							</div>
						</div>
						<span className="text-gray-600 text-14px">
							By subscribing to our newsletter you agree with our Terms and
							Conditions.
						</span>
						<div className="flex mt-52px items-start flex-col">
							<span className="text-white text-20px font-bold mb-1px">
								Contact
							</span>
							<a
								href="mailto:use@active-app.com?subject=Support"
								className="text-gray-200 text-14px underline"
							>
								use@active-app.com
							</a>
						</div>
					</div>
					<div className="gap-2 flex flex-wrap mt-3 flex-row justify-between">
						<div className="w-240px flex flex-col">
							<span className="text-white text-20px font-bold mb-1px">
								Solutions
							</span>
							<div className="gap-1 flex flex-col">
								<span className="text-gray-200 cursor-pointer text-14px">
									Responsive Web Design
								</span>
								<span className="text-gray-200 text-14px">
									Responsive Prototypes
								</span>
								<span className="text-gray-200 text-14px">Design to Code</span>
								<span className="text-gray-200 text-14px">
									Static Website Builder
								</span>
								<span className="text-gray-200 text-14px">
									Static Website Generator
								</span>
							</div>
						</div>
						<div className="w-240px flex flex-col">
							<span className="text-white text-20px font-bold mb-1px">
								Company
							</span>
							<div className="gap-1 flex flex-col">
								<span className="text-gray-200 text-14px">About</span>
								<span className="text-gray-200 text-14px">Team</span>
								<span className="text-gray-200 text-14px">News</span>
								<span className="text-gray-200 text-14px">Partners</span>
								<span className="text-gray-200 text-14px">Careers</span>
								<span className="text-gray-200 text-14px">
									Press &amp; Media
								</span>
							</div>
						</div>
						<div className="w-240px flex flex-col">
							<span className="text-white text-20px font-bold mb-1px">
								Social Media
							</span>
							<div className="gap-1 flex flex-col">
								<span className="text-gray-200 text-14px">Twitter</span>
								<span className="text-gray-200 text-14px">Linkedin</span>
								<span className="text-gray-200 text-14px">Crunchbase</span>
								<span className="text-gray-200 text-14px">Instagram</span>
								<span className="text-gray-200 text-14px">Facebook</span>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex max-w-[1200px] mt-3 items-start select-none flex-col">
					<span className="text-3xl font-serif text-white">Accessible ai</span>

					{/* <img
						alt="pastedImage"
						src="/public/Accessible.ai2_-202x56.png"
						className="w-var(--dl-size-size-large) filter invert-100 sepia-0 saturate-0 hue-rotate-93 brightness-103 contrast-103 mb-1px"
					/> */}
					<span className="text-sm  tracking-wide">
						Copyright © Accessible AI <span id="year">2023</span> | All right
						reserved
					</span>
				</div>
			</footer>
			;
		</div>
	);
};

export default Footer;
