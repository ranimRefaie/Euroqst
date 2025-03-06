"use client";
import Image from "next/image";
import c1 from '../../../assets/image-blogs.jpg'


interface Blog1Props {
    title: string;
    content: string;
}

interface Blog2Props {
    title: string;
    points: string[]; 
}
const BlogItem1: React.FC<Blog1Props> = ({ title, content }) => (
    <div className="mt-8">
        <h4 className="text-[20px] font-bold leading-7 text-[#000000]">{title}</h4>
        <p className="text-[20px] font-normal leading-7 text-[#000000]">{content}</p>
    </div>
);

const BlogItem2: React.FC<Blog2Props> = ({ title, points }) => (
    <ul className="text-[20px] font-normal leading-7 text-[#000000]">
        <li>{title}</li>
        {points.map((point, index) => (
            <p key={index}>- {point}</p>
        ))}
    </ul>
);

const Blog: React.FC = () => {


    const blogPosts1 = [
        {
            title: "1- The Spread of Short Videos or Reels",
            content: "With the widespread spread of social media platforms that rely mainly on images and visual and audio media, it was necessary to take advantage of this in the field of digital marketing, and the most prominent of these means are TikTok and Instagram as of present."
        },
        {
            title: "2- Customer Service Using Artificial Intelligence",
            content: "The enormous data analysis capabilities supported by artificial intelligence and smart machines helped analyze the data of each customer and determine the optimal strategy through which to provide the best model of customer service to each customer, which was extremely difficult in the past."
        },
        {
            title: "3- Interfacing with Generative AI Engines",
            content: "Or what is known today as generative search engines, which are inductive bots that rely mainly on the database of customer service department information, which meets the customer’s needs and answers all their questions with high speed and great efficiency."
        },
    ];

    const blogPosts2 = [
        {
            title: "1- The Target Audience",
            content: "New trends in digital marketing have contributed to increasing the size of the target audience in digital advertising campaigns through the increasing number of social media users and rapid access to the Internet compared to the past."
        },
        {
            title: "2- Data Analysis",
            content: "The development of data analysis in any field has a tremendous impact on moving the level of work in it to another place by accelerating decision-making processes and innovating new forms of marketing strategies and methods of communicating with customers."
        },
        {
            title: "3- Content Creation",
            content: "The content creation process is becoming a very pioneering form in the field of digital advertising and marketing, and generative artificial intelligence techniques help improve the quality of content and raise the speed and productivity of content creation in their work."
        },
        {
            title: "4- Evaluation of Advertising Campaigns",
            content: "Data analysis and case study techniques have helped develop better key performance indicators to help evaluate any action we take within our work. read more: Project, Contract, Procurement courses"
        }
    ];


    const blogPosts3 = [
        {
            title: "1- Embracing a Privacy-First Approach",
            points: [
                "Invest in building a robust first-party data strategy through opt-in forms, loyalty programs, and surveys.",
                "Prioritize transparency – communicate how customer data is collected and used.",
                "Offer value in exchange for data – provide users with compelling reasons to share their information."
            ]
        },
        {
            title: "2- Mastering Self-Service Ad Platforms",
            points: [
                "Familiarize yourself with the leading self-serve ad platforms (e.g., Google Ads, Facebook Ads Manager).",
                "Experiment with different ad formats and targeting options.",
                "Consider partnering with a digital marketing agency specializing in self-serve advertising for advanced strategies."
            ]
        },
        {
            title: "3- Leveraging AI for Marketing Automation",
            points: [
                "Identify repetitive tasks in your marketing workflow that can be automated using AI tools.",
                "Explore AI-powered platforms for content creation, social media management, and email marketing personalization.",
                "Utilize AI-driven insights to optimize campaign targeting, budget allocation, and content strategy."
            ]
        },
        {
            title: "4- Integrating Live Streaming into Your Strategy",
            points: [
                "Develop a live streaming strategy aligned with your overall marketing goals.",
                "Host live product demos, behind-the-scenes glimpses, Q&A sessions, and influencer collaborations.",
                "Promote your live streams across all marketing channels and leverage interactive features to engage viewers."
            ]
        },
        {
            title: "5- Creating Compelling Video Content",
            points: [
                "Understand your target audience and tailor your video content to resonate with their interests.",
                "Invest in high-quality video production, even if it's on a smartphone.",
                "Experiment with different video formats – explainer videos, product reviews, customer testimonials, or behind-the-scenes peeks."
            ]
        },
        {
            title: "6- Prioritizing Customer Experience",
            points: [
                "Map out your customer journey across all touchpoints – website, social media, email marketing, customer service.",
                "Personalize interactions based on customer data and preferences.",
                "Actively collect"
            ]
        }
    ];
    return (
        <div className="w-[88%] mx-auto  mt-8">
            <div className="w-[100%] h-[396px] relative">
                <Image src={c1} width={1262} height={396} alt="" className="w-full h-full rounded-3xl" />
                <div className="absolute w-full h-full bg-[#C8CAD0] top-0 opacity-50 rounded-3xl"></div>
                <div className="absolute w-full h-full flex justify-center items-center mx-auto top-0 z-10 ">
                    <p className="w-[82%] text-[36px] leading-[50.4px] font-bold text-[#293352]">how trends in digital marketing are redefining online strategies in 2024</p>
                </div>
            </div>

            <div className="mt-[51px] mb-10">
                <p className="text-[20px] font-normal leading-7 text-[#000000]">In light of the new trends emerging in the world of business and various industries, the field of marketing had to find new trends in digital marketing to match the new needs in the world of marketing. <br />
                    Recently, digital marketing has occupied a large share within the marketing industry, which aims to increase sales and ensure business success and sustainability by increasing the number of customers and increasing the percentage of profits. <br />
                    This article helps you learn more about the most prominent new trends in the field of digital marketing and how they affect the world of marketing, in addition to how to ideally benefit from them within your work.
                </p>

                <div className="mt-8">
                    <h4 className="text-[20px] font-bold leading-7 text-[#000000]">New Trends in Digital Marketing in 2024</h4>
                    <p className="text-[20px] font-normal leading-7 text-[#000000] mt-8">At the beginning of the year 2024, a new and large group of new concepts and methods emerged in the world of digital marketing, which experts indicate are capable of completely changing the pattern of the digital marketing process over the next few years, which include the following</p>
                </div>

                {blogPosts1.map((post, index) => (
                    <BlogItem1 key={index} title={post.title} content={post.content} />
                ))}

                <p className="text-[20px] font-normal leading-7 text-[#000000] mt-8">
                    If you would like to know more about the training courses offered by Euroquest Training Center, contact us.
                    Digital Marketing Has Changed From Past To Present Due To New Digital Marketing Trends
                    New technologies, such as those we mentioned previously, have contributed to many changes in the field of digital marketing, which are represented by a set of points as follows:
                </p>

                {blogPosts2.map((post, index) => (
                    <BlogItem1 key={index} title={post.title} content={post.content} />
                ))}


                <p className="text-[20px] font-normal leading-7 text-[#000000] mt-8">The impact of new trends in digital marketing on marketing strategies <br />
                    The area of digital marketing is always changing due to developments in technology, shifts in consumer behavior, and the emergence of new trends. <br />
                    Businesses must continue to be flexible and use new tactics to remain competitive given the dynamic nature of digital marketing. Globally, several important changes in recent years have had a major impact on how digital marketing strategies are developed and redefined. <br />
                    Artificial Intelligence and Machine Learning <br />
                    Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing digital marketing by enabling more personalized and efficient marketing strategies. <br />
                    AI-driven tools analyze vast amounts of data to glean insights about consumer behavior, predict trends, and optimize campaigns in real time. For instance, AI-powered chatbots improve customer service by providing instant responses to inquiries, which enhances customer experience and engagement. <br />
                    Moreover, AI algorithms can tailor content recommendations to individual users, increasing the relevance and impact of marketing efforts. <br />
                    Data Privacy and Security <br />
                    Due to growing consumer awareness and concern over data privacy, particularly in the wake of regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), businesses have had to make significant adjustments to their digital marketing strategies. <br />
                    Specifically, they now place a higher priority on transparent data practices and secure data management to gain the trust of their customers. Additionally, there is a greater emphasis on first-party data collection, which involves collecting data directly from customers rather than relying on third parties. <br />
                    Businesses can ensure compliance while still gaining insightful information by focusing on direct audience building.
                    The Evolution of Social Media <br />
                    Social media platforms are always evolving as a result of new features and algorithms that alter how companies interact and reach their target consumers. <br />
                    Short-form videos, which have gained popularity swiftly, are one of the new types of material that platforms like TikTok have created. These shifts force marketers to implement creative content strategies that emphasize authenticity and inventiveness.
                    Furthermore, the customer experience has been simplified by social commerce, which allows things to be instantly purchased through social media platforms, allowing users to convert from surfers to purchasers without ever leaving the app. <br />
                    register now: <span className="underline">Mastering Sales & Marketing in the Age of New Social Media course</span></p>


                <p className="text-[20px] font-normal leading-7 text-[#000000] mt-8">Using the Potential of Emerging Trends <br />
                    After examining the most popular trends, let&#39;s see how your organization might benefit from them:</p>



                {blogPosts3.map((post, index) => (
                    <BlogItem2 key={index} title={post.title} points={post.points} />

                ))}


                <p className="text-[20px] font-normal leading-7 text-[#000000] mt-8">
                    If you want to know more about the training courses offered by Euroquest Training Center, contact us. <br />
                    Conclusion <br />
                    In this article, we learned about the most prominent new trends in digital marketing. We also discussed the most prominent changes and facts caused by the emergence of this type of technology within the fields of digital marketing through a comparison between marketing operations in the past and the present, in addition to our knowledge of how artificial intelligence affects redefining strategies. <br />
                    Frequently Asked Questions <br />
                    Here are two of the most common questions people ask about new trends in digital marketing and how they impact the marketing industry. <br />
                    Will marketing experts lose their jobs because of artificial intelligence? <br />
                    Artificial intelligence technologies may help reduce the number of employees and workers within companies by implementing a large number of operations and processors very quickly, but they need a permanent human element to monitor their work, so people who have the skills to deal with these technologies will continue to perform their work normally. <br />
                    Could new marketing strategies emerge in 2024? <br />
                    The year 2024 will witness many technical changes and revolutions that have brought about many changes in digital marketing strategies. Therefore, it is not unlikely that new strategies will emerge in this field.
                </p>
            </div>
        </div>
    );
};

export default Blog;




