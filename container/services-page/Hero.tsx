import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
	{
		id: 1,
		name: "Paid Marketing",
		tagline: "The right people. The right message. The right moment.",
		description: "We run Meta ad campaigns engineered for one thing — getting your ideal coaching clientele into your funnel.",
		includes: [
			"Meta Ads (Facebook & Instagram) strategy and execution",
			"Ad creative direction and copywriting",
			"Audience research and targeting",
			"Campaign setup, monitoring, and optimization",
			"CAC, CPL, and ROAS tracking",
			"A/B testing on creatives and copy",
			"Weekly and monthly performance reports",
		],
	},
	{
		id: 2,
		name: "Landing Pages",
		tagline: "Your page should do the selling before you say a word.",
		description: "We design and write conversion-focused landing pages and sales pages that move visitors from curious to committed.",
		includes: [
			"Landing page copywriting and structure",
			"Sales page optimization",
			"Call booking funnel setup",
			"Webinar and masterclass registration pages",
			"Consultation funnel design",
			"Testimonial and social proof strategy",
			"Conversion tracking and fixes",
		],
	},
	{
		id: 3,
		name: "Automation",
		tagline: "Your business should be working even when you're not.",
		description: "We build the backend systems that keep leads warm, move them through your funnel, and free you from manual follow-up — permanently.",
		includes: [
			"Email sequence setup and copywriting",
			"WhatsApp sequence and automation",
			"CRM setup and management",
			"Lead qualification workflows",
			"Webinar show-up optimization sequences",
			"Pipeline automation",
			"Integration across your entire tech stack",
		],
	},
	{
		id: 4,
		name: "Growth Systems",
		tagline: "Strategy, data, and relentless optimization — so your growth compounds.",
		description: "This is the engine behind everything. We don't just run campaigns and hope — we track, analyze, test, and refine every part of your funnel.",
		includes: [
			"KPI dashboard setup and tracking",
			"Ad performance analysis",
			"Funnel optimization",
			"Conversion rate, CAC, and lead cost analysis",
			"A/B testing across funnel stages",
			"Competitor and market intelligence",
			"Weekly and monthly strategy reporting",
			"Offer positioning and pricing strategy",
		],
	},
];

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase">
								What We Do —{" "}
								<br className="sm:hidden xm:hidden" />
								And How We Do It.
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#1B2B6B33]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							Four core services.&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								One outcome&nbsp;
							</span>
							—&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								predictable, scalable&nbsp;
							</span>
							growth for your coaching business.
						</p>
					</div>

					{/* Services Detail Blocks */}
					<div className="w-full padding-x flex flex-col gap-0">
						{services.map((service, index) => (
							<div
								key={service.id}
								className={`w-full py-[60px] sm:py-[40px] xm:py-[40px] flex gap-[50px] sm:flex-col xm:flex-col ${
									index === 0 ? "border-t border-[#1B2B6B33]" : ""
								} border-b border-[#1B2B6B33]`}>
								{/* Left: Number + Title */}
								<div className="w-[30%] sm:w-full xm:w-full flex-shrink-0">
									<span className="text-[11px] uppercase tracking-[3px] font-NeueMontreal font-semibold text-accent mb-[16px] block">
										0{service.id}
									</span>
									<h2 className="text-[36px] sm:text-[28px] xm:text-[24px] font-FoundersGrotesk font-bold text-secondry leading-[1.1] mb-[16px]">
										{service.name}
									</h2>
									<p className="paragraph font-NeueMontreal text-secondry opacity-60 italic">
										{service.tagline}
									</p>
								</div>
								{/* Right: Description + Includes */}
								<div className="w-[70%] sm:w-full xm:w-full flex flex-col gap-[30px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										{service.description}
									</p>
									<div>
										<p className="small-text font-NeueMontreal font-semibold text-secondry uppercase tracking-[2px] mb-[16px]">
											What&apos;s included:
										</p>
										<ul className="flex flex-col gap-[10px]">
											{service.includes.map((item, i) => (
												<li key={i} className="flex items-start gap-[12px]">
													<span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0 mt-[8px]" />
													<span className="paragraph font-NeueMontreal text-secondry opacity-80">
														{item}
													</span>
												</li>
											))}
										</ul>
									</div>
									<div>
										<Link
											href="/contact"
											className="flex items-center gap-[10px] group w-fit">
											<div className="rounded-[50px] border border-[#1B2B6B99] group-hover:bg-secondry py-[6px] px-[16px] cursor-pointer transition-all duration-300">
												<span className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-white transition-all duration-300">
													Book a Strategy Call
												</span>
											</div>
											<div className="w-[36px] h-[36px] border border-[#1B2B6B99] rounded-full flex items-center justify-center group-hover:bg-secondry transition-all duration-300 xm:hidden sm:hidden">
												<ArrowUpRight size={18} strokeWidth={1.5} className="text-secondry group-hover:text-white" />
											</div>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
