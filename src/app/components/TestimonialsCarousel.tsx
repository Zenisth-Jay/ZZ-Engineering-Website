import Slider from 'react-slick';
import { Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Nancy N.',
        company: 'Osmon Homes LLC',
        location: 'San Diego, CA',
        quote: 'Zion Engineering has been an essential partner in our projects Paul is incredibly easy to work with, always quick to respond to emails & calls. His expertise in beam replacement, addition calculations, foundation engineering and structural analysis has been invaluable on numerous occassions. Paul is someone you can rely on to ensure the structural intergrity of your home.',
        stars: 5
    },
    {
        id: 2,
        name: 'Ron N.',
        company: 'Real Estate Investor',
        location: 'San Diego, CA',
        quote: 'We hired Zion Engineering to design & apply permit for our multiple projects. New multi-ADU complex, renovation & addition of our properties. They exceeded every expectation. Their innovative design not only maximized our space but also reflected our brand perfectly. The project was delivered on time and more importantly within budget. Exceptional service!',
        stars: 5
    },
    {
        id: 3,
        name: 'Carl A.',
        company: 'CA Builders',
        location: 'Las Vegas, NV',
        quote: 'Zion Engineering designed and processed all the plans to obtain the building permit. They paid attention to detail and were very professional. They were very responsive in a timely manner to all questions, and as a result, we completed the project on time and within the budget. It was a pleasure working with Zion Engineering and will definitely hire them for our future project.',
        stars: 5
    },
    {
        id: 4,
        name: 'Ethel M.',
        company: 'Real Estate Group',
        location: 'Las Vegas, NV',
        quote: 'I reached out to Zion Engineering Services with some questions about a slab issue, and foundation issues recently, and even though I wasn\'t a paying client, they took the time to offer thoughtful recommendations and professional insight. I truly appreciated their willingness to help and the clear, knowledgeable advice they provided. That kind of responsiveness speaks volumes—I\'d gladly recommend them to anyone needing structural guidance',
        stars: 5
    },
    {
        id: 5,
        name: 'Nathaniel L.',
        company: 'Enterprise Production',
        location: 'San Diego, CA',
        quote: 'I have had the wonderful privilege and pleasure working with Paul Esteban on several projects and our customers have been very satisfied. Paul runs his business on the pretense "How can I be of service and help you? Thank you so much for your expertise as well as your friendship Paul',
        stars: 5
    },
    {
        id: 6,
        name: 'Saif P.',
        company: 'Property Owner',
        location: 'San Diego, CA',
        quote: 'I strongly recommend working with Zion Engineering, I love their design skills and the communication with Paul is easy. Paul is very honest and he did his best for us. He made sure that we are happy and comfortable with our ADU design. We also got the permit on time, thank you Paul!',
        stars: 5
    },
    {
        id: 7,
        name: 'Santiago C.',
        company: 'San Ysidro Clinic Rep',
        location: 'San Diego, CA',
        quote: 'We hired Zion Engineering to design a PARKING LOT and apply permit for the San Ysidro Clinic. Paul is very professional and knows what he\'s doing. He also helped me with my LOT SPLIT for another property. It\'s great experience working with Paul, very knowledgeable and knows how to get things done!',
        stars: 5
    },
    {
        id: 8,
        name: 'Frederic F.',
        company: 'Keller Williams Realtor',
        location: 'San Diego, CA',
        quote: 'Paul successfully designed my detached ADU and applied for a building permit. I was lucky to hire him for my project and since then I was referring him to my clients. I always hear positive feedback about him, thank you Paul!',
        stars: 5
    }
];

export function TestimonialsCarousel() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreen(); // run on load
        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: isMobile ? 1 : 3, // ✅ FIXED
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 font-heading uppercase">
                        What Our <span className="text-secondary">Clients Say</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Trusted by property owners, developers, and builders across California and Nevada
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="testimonials-carousel overflow-hidden">
                    <Slider {...carouselSettings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-2 sm:px-3">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-secondary/50 transition-all h-full min-h-[280px] flex flex-col">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.stars)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-slate-200 text-sm leading-relaxed mb-6 flex-1 italic">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="border-t border-white/10 pt-4">
                                        <div className="font-bold text-white">{testimonial.name}</div>
                                        <div className="text-sm text-secondary font-semibold">{testimonial.company}</div>
                                        <div className="text-xs text-slate-400 mt-1">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
