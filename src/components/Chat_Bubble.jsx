import PropTypes from "prop-types";
import { marked } from "marked";

function Chat_Bubble({ user, bot }) {
	// const handleClick = (event) => {
	// 	const svgElement = event.target;
	//     svgElement.style.fill = svgElement.style.fill === "blue" ? "currentColor" : "blue";
	// };

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text).then(
			() => {
				console.log("Text copied to clipboard");
			},
			(err) => {
				console.error("Could not copy text: ", err);
			}
		);
	};
	return (
		<>
			{user && (
				<li className="py-2 sm:py-4">
					<div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
						<div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
							<span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
								<span className="text-lg font-medium text-white leading-none">
									{localStorage.getItem("name")?.charAt(0).toUpperCase() || ""}
								</span>
							</span>
							<div className="grow mt-2 space-y-3">
								<p className="text-gray-800 ">{user}</p>
							</div>
						</div>
					</div>
				</li>
			)}
			{bot && (
				<li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
					<svg
						width="30"
						height="34"
						viewBox="0 0 44 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M25.8001 35.7873C22.3001 34.4873 18.7001 34.2873 15.4001 35.1873C13.1001 35.7873 10.9001 36.9873 8.90012 38.4873L7.50009 39.6873L7.1001 40.0873L8.00009 40.8873C8.10009 40.8873 8.1001 40.9873 8.2001 41.0873C8.4001 41.2873 8.60012 41.3873 8.90012 41.5873L9.50009 41.9873L10.1001 41.4873C10.2001 41.3873 10.4001 41.1873 10.6001 41.0873C12.4001 39.5873 14.4001 38.5873 16.5001 38.0873C19.2001 37.3873 22.1001 37.4873 25.0001 38.5873C27.4001 39.4873 32.3001 40.5873 38.2001 38.0873L38.4001 37.9873L38.7001 37.6873C38.7001 37.5873 38.8001 37.5873 38.9001 37.4873C39.4001 36.8873 39.9001 36.2873 40.3001 35.5873L42.3001 32.4873L39.1001 34.2873C34.4001 36.8873 30.1001 37.3873 25.8001 35.7873Z"
							fill="black"
						/>
						<path
							d="M12.1 24.9876C14.8 24.2876 17.7 24.3876 20.6 25.4876C23.8 26.6876 32 28.3876 41.2 20.0876L42.7 18.5876L42.8 18.4876L43.2 18.0876L43 17.5876C42.9 17.1876 42.7 16.6876 42.5 16.1876L42 14.7876L41 15.7876C40.9 15.9876 40.7 16.0876 40.5 16.2876C36.1 20.7876 29.3 25.3876 21.5 22.5876C18 21.2876 14.4 21.0876 11.1 21.9876C7.90001 22.8876 5.1 24.5876 2.5 26.9876V26.8876L1 28.4876C1 28.5876 0.900018 28.5876 0.800018 28.6876L0.5 28.9876L0.600006 29.3876C0.700006 29.8876 0.9 30.3876 1 30.8876L1.60001 32.4876L2.60001 31.1876C2.70001 30.9876 2.9 30.8876 3 30.6876C5.1 28.7876 8.00001 26.0876 12.1 24.9876Z"
							fill="black"
						/>
						<path
							d="M2.40002 23.1874C4.70002 20.7874 7.30001 19.2874 10.1 18.4874C12.8 17.7874 15.7 17.8874 18.6 18.9874C27.6 22.2874 35.4 16.8874 38.8 13.9874L40.1 12.6874L40.6 12.2874L40.2 11.6874C39.9 11.3874 39.7 10.9874 39.4 10.5874L38.8 9.78735L38.1 10.4874C38 10.5874 37.8 10.7874 37.7 10.8874C33.5 14.8874 27 18.9874 19.6 16.1874C16.1 14.8874 12.5 14.6874 9.20001 15.5874C7.10001 16.1874 5.10001 17.1874 3.10001 18.4874L1 20.1874C0.8 20.3874 0.7 20.4874 0.5 20.6874L0.300018 20.8874V21.1874C0.200018 21.8874 0.200006 22.5874 0.100006 23.1874L0 25.6874L1.70001 23.8874C1.90001 23.6874 2.10002 23.3874 2.40002 23.1874Z"
							fill="black"
						/>
					</svg>
					<p className="text-gray-800 ">{bot}</p>
				</li>
			)}
		</>
	);
}

Chat_Bubble.propTypes = {
	user: PropTypes.string,
	bot: PropTypes.string,
};

export default Chat_Bubble
