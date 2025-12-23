import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Balancer from "react-wrap-balancer";
import { StarIcon } from "@heroicons/react/24/solid";
import { defaultConfig } from "@/lib/default-config";

const ReviewCard = ({ img, name, body, rating = 5 }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
                    <div className="flex gap-0.5 mt-1">
                        {[...Array(Math.floor(rating))].map((_, i) => (
                            <StarIcon key={i} className="size-4 text-yellow-500" />
                        ))}
                    </div>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Reviews({ reviews = defaultConfig.reviews }) {
    const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
    const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8 max-w-7xl mx-auto">
            <div>
                <h2 className="text-center text-balance mx-auto text-3xl md:text-5xl font-semibold">
                    Trusted By Homeowners
                </h2>
                <p className="mt-3 max-w-2xl text-balance text-center mx-auto">
                    Don't just take our word for it—see what our satisfied customers have to say.
                </p>
            </div>

            <div>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review, idx) => (
                        <ReviewCard key={`review-1-${idx}`} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review, idx) => (
                        <ReviewCard key={`review-2-${idx}`} {...review} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
        </div>
    );
}
