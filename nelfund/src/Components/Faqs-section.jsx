
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection() {
	return (
		<div className="mx-auto md:px-20 lg:px-40 p-4 sm:px-10 py-12 w-full  space-y-7">
			<div className="space-y-2">
				<h2 className=" md:block text-2xl md:text-3xl lg:leading-16 text-left md:text-center font-semibold tracking-tight text-black">
					Frequently Asked Questions
				</h2>
				<p className="text-[#667085] text-lg lg:text-xl font-normal md:text-center leading-8  py-2 w-full">
		Everything you need to know about the student
        <br />
loan and repayment.
				</p>
			</div>
			<Accordion className=" w-full border-b" collapsible type="single">
				{questions.map((item) => (
					<AccordionItem className="px-4" key={item.id} value={item.id}>
						<AccordionTrigger className="pt-4 pb-8 hover:no-underline focus-visible:underline focus-visible:ring-0 font-medium text-black text-base md:text-xl">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="pb-4! text-muted-foreground">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}

const questions = [
	{
		id: "item-1",
		title: "What is the Students Loans (Access to Higher Education) Act, 2024?",
		content:
			"The Student’s Loan Act is an Act of the Parliament that makes it possible for Nigerian students to access zero interest loans to enable them pay for institutional charges and upkeep to any higher institution of their choice within Nigeria.",
	},
	{
		id: "item-2",
		title: "Is the Student’s Loan the same as the Nigerian Education Bank?",
		content:
			"No. The Student’s Loan Act has repealed the Nigerian Education Bank Act and established a framework for providing zero interest loans to eligible Nigerian students who desire to study at any institution of higher education.",
	},
	{
		id: "item-3",
		title: "Who administers the loans to the students?",
		content:
			"The loans will be administered by the Nigerian Education Loan Fund (NELFUND), which is the body established by law to carry out the day-to-day activities of the Fund. It is headed by a Managing Director, appointed by the President of Nigeria.",
	},
	{
		id: "item-4",
		title: "Is the loan open to all tertiary institutions?",
		content:
			"The Loan is open to all public tertiary Institutions. The first phase of the loan is open to only students studying/desiring to study in federal higher institutions in Nigeria. The other phases will be announced in due course.",
	},
];
export default FaqsSection;