import "./articles.css";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
const Articles = () => {
  return (
    <section className="article container flex">
      <div className="side_bar">
        <div className="calender_icon">
          <SlCalender/>
        </div>
        <div className="date">
        <p>10</p>
        </div>
        <div className="mounth">
          <p>Feb</p>
        </div>
        <div className="day">
        <p>Monday</p>
        </div>
        <div className="year">
          <p>2025</p>
        </div>
      </div>
      <div className="article_content">
        <div className="goto flex left">
          <p>
            <Link to="/blog">
              Post
              <FaAnglesRight />
            </Link>
          </p>
          <p>
            <Link to="">
              Baby Caretaker Service in India
              <FaAnglesRight />
            </Link>
          </p>
        </div>
        <div className="article_header">
          <h2>New Zealand Women vs Sri Lanka Women: </h2>
          <h3>-Reddy Anna Match Prediction – NZW vs</h3>
          <p>
            Managing work and family can be challenging for parents, increasing
            the demand for professional baby caretaker services in India for
            safety and care.
          </p>
        </div>
        <div className="poster">
          <img src="/img_01.png" alt=""/>
        </div>
        <div className="upcomming_articles flex">
          <h4>Upcomming Articles</h4>
          <Link to="/blog">View all posts</Link>
        </div>
        <div className="upcomming_articles_list">
          {/* <div className="post_img">

          </div>
           */}
        </div>

        <div className="article_body">
          <div className="article_title">
            <h3>Benefits of Hiring a Professional Baby Caretaker</h3>
          </div>
          <ol>
            <li>
              Expert Care and Safety: Professional caretakers are trained in
              handling infants and toddlers, ensuring their safety and
              well-being at all times.
            </li>
            <li>
              Personalized Attention: A dedicated caretaker provides one-on-one
              attention to the baby, catering to their unique needs and
              preferences.
            </li>
            <li>
              Peace of Mind for Parents: Knowing that a trained professional is
              caring for their child allows parents to focus on work and other
              responsibilities without worry.
            </li>
            <li>
              Flexible Schedules: Caretaker services can be tailored to fit the
              family’s schedule, offering full-time, part-time, or even
              overnight care.
            </li>
            <li>
              Early Childhood Development: Many caretakers are trained in early
              childhood education and engage babies in sensory and motor
              activities that promote cognitive and emotional growth.
            </li>
          </ol>
          <div className="para_block">
            <div className="article_title">
              <h3>Challenges in Finding the Right Baby Caretaker</h3>
            </div>
            <p>
              While the demand for baby caretakers is rising, finding the right
              match can be challenging. Trust and reliability are major concerns
              for parents. Many turn to professional agencies that conduct
              background checks, provide training, and ensure that the
              caretakers are experienced and well-qualified. Additionally,
              compatibility between the caretaker and the child is crucial for a
              positive caregiving experience.
            </p>
          </div>
          <div className="para_block">
            <div className="article_title">
              <h3>Rising Demand for Baby Caretaker Services in India</h3>
            </div>
            <p>
              With the increasing number of working parents and nuclear
              families, the demand for professional baby caretakers has grown
              rapidly in India. Unlike earlier times when joint families
              provided support in raising children, modern families often lack
              this network. This has created a need for reliable and trained
              caretakers who can provide personalized care at home. Parents
              today are not only looking for someone to watch over their
              children but also someone who can engage them in productive
              activities, assist with feeding, diaper changing, and sleep
              routines, and promote emotional and physical development. Baby
              caretakers are trained to handle emergencies, follow a structured
              routine, and create a nurturing environment for the child.
            </p>
          </div>

          <div className="para_block">
            <div className="article_title">
              <h3>Challenges in Finding the Right Baby Caretaker </h3>
            </div>

            <p>
              While the demand for baby caretakers is rising, finding the right
              match can be challenging. Trust and reliability are major concerns
              for parents. Many turn to professional agencies that conduct
              background checks, provide training, and ensure that the
              caretakers are experienced and well-qualified. Additionally,
              compatibility between the caretaker and the child is crucial for a
              positive caregiving experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
