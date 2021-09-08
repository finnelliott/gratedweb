import MainLayout from "../shared/MainLayout"
import FeaturesSection from "./FeaturesSection"
import HeroSection from "./HeroSection"
import NewsletterSection from "./NewsletterSection"
import StatisticsSection from "./StatisticsSection"

const HomeController = () => {
    return (
        <MainLayout>
            <HeroSection />
            <FeaturesSection />
            <StatisticsSection />
            <NewsletterSection />
        </MainLayout>
    )
}

export default HomeController