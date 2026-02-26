import { Link } from "react-router-dom";
import "./About.css";

export function About() {
  return (
    <div className="about-page">
      <div className="about-container about-rtl">
        <div className="about-content">
          {/* Header */}
          <div className="about-header">
            <h1 className="about-title">
              <span className="gradient-text">About Me</span>
            </h1>
          </div>

          {/* Bio Section */}
          <div className="about-bio">
            <p className="about-bio-text">
              אני מפתח Full Stack עם גישה יסודית וממוקדת בבניית מערכות יציבות, מודולריות וקלות לתחזוקה. אני שם דגש על הבנת התמונה הרחבה בפרויקט — הן בצד הלקוח והן בצד השרת — ומוודא שכל רכיב בקוד משרת מטרה ברורה.
            </p>

            <p className="about-bio-text">
              אני מודע לכך שהפתרון הטוב ביותר אינו תמיד המורכב ביותר, ולא פחות חשוב מזה — לדעת מתי להשאיר דברים פשוטים ולהימנע מסיבוכים מיותרים.
            </p>

            <p className="about-bio-text">
              במהלך הלמידה והעבודה על פרויקטים מעשיים, נחשפתי למגוון טכנולוגיות וכלים מעבר למה שנמצא בשימוש העיקרי שלי. אני שואף כל הזמן להרחיב את הידע שלי, ולומד במהירות כל כלי או טכנולוגיה שנדרשים לטובת הפרויקט. אני רואה בלמידה מתמשכת חלק בלתי נפרד מהמקצוע, ומוכן להשתלם בכל טכנולוגיה שתידרש על מנת לספק פתרון איכותי ורלוונטי.
            </p>

            <p className="about-bio-text">
              במהלך הדרך פיתחתי הבנה עמוקה בתכנון צד השרת — בניית API, עבודה עם מסדי נתונים, אבטחה וביצועים, ותיאום מדויק בין השרת לפרונטאנד. עם זאת, אני שומר על מודעות מלאה לחשיבות שווה של צד הלקוח והחוויה שהוא מספק.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills-section">
            <h3 className="about-skills-title gradient-text">טכנולוגיות וכלים</h3>

            {/* Frontend */}
            <div className="about-skills-category">
              <h4 className="about-skills-title">Frontend</h4>
              <ul className="about-skills-list">
                <li className="about-skills-item"><span dir="ltr">React עם TypeScript ו־Vite</span></li>
                <li className="about-skills-item"><span dir="ltr">Material-UI ו־CSS מודולרי לבניית רכיבים נקיים</span></li>
                <li className="about-skills-item"><span dir="ltr">Axios ו־React Router לניהול תקשורת עם ה־API</span></li>
              </ul>
            </div>

            {/* Backend */}
            <div className="about-skills-category">
              <h4 className="about-skills-title">Backend</h4>
              <ul className="about-skills-list">
                <li className="about-skills-item"><span dir="ltr">Python ו־Flask לבניית API RESTful</span></li>
                <li className="about-skills-item"><span dir="ltr">מסדי נתונים כגון MySQL ו־PostgreSQL בסביבת Neon</span></li>
                <li className="about-skills-item"><span dir="ltr">Postman לצורכי בדיקות ותיעוד API</span></li>
              </ul>
            </div>

            {/* Tools */}
            <div className="about-skills-category">
              <h4 className="about-skills-title">כלים ותשתיות</h4>
              <ul className="about-skills-list">
                <li className="about-skills-item"><span dir="ltr">Git ו־GitHub לניהול קוד וגרסאות</span></li>
                <li className="about-skills-item"><span dir="ltr">Docker לסביבת פיתוח מבודדת</span></li>
              </ul>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="about-philosophy">
            <h3 className="about-philosophy-title">הפילוסופיה שלי</h3>
            <p className="about-philosophy-text">
              אני שואף לבנות פתרונות ברורים, יציבים ותחזוקתיים, שמאפשרים עבודה יעילה לאורך זמן.
            </p>
            <p className="about-philosophy-text">
              אם אתם מחפשים מפתח עם חשיבה רחבה על הפיתוח הטכני, אשמח לשוחח.
            </p>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <Link to="/contact" className="about-cta-link">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
