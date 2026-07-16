export default function Heading({
	title,
	className,
	showAccent = true,
}: {
	title: string;
	className?: string;
	showAccent?: boolean;
}) {
	return (
		<h2 className={`section-heading ${className}`}>
			{showAccent ? (
				<span className="inline-flex items-center gap-[14px]">
					<span className="section-heading-accent flex-shrink-0" aria-hidden="true" />
					<span>{title}</span>
				</span>
			) : (
				title
			)}
		</h2>
	);
}
