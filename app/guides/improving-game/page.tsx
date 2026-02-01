import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Improving Your Pickleball Game - Tips & Strategies',
  description: 'Learn advanced techniques, strategies, and tips to take your pickleball skills to the next level. Comprehensive guide for intermediate and advanced players.',
  keywords: [
    'improve pickleball',
    'pickleball tips',
    'pickleball strategies',
    'pickleball techniques',
    'advanced pickleball',
    'pickleball training'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/improving-game',
  },
}

export default function ImprovingGamePage() {
  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema-improving"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Improving Your Pickleball Game - Tips & Strategies',
            description: 'Comprehensive guide to advanced pickleball techniques, strategies, and training tips.',
            author: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
            },
            datePublished: '2025-01-01',
            dateModified: '2025-01-31',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://pickleballatx.org/guides/improving-game',
            },
          }),
        }}
      />
      
      <div>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container-custom">
            <Link href="/guides" className="inline-flex items-center text-primary-100 hover:text-white mb-4">
              ← Back to Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Improving Your Pickleball Game
            </h1>
            <p className="text-xl text-primary-50">
              Advanced techniques and strategies to elevate your play
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="lead">
                Once you've mastered the basics of pickleball, the journey to improvement becomes about refining 
                technique, developing strategy, and building consistency. Whether you're looking to compete in 
                tournaments or simply want to play better in your local games, these advanced tips and strategies 
                will help take your game to the next level.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Mastering the Dink
              </h2>
              <p>
                The dink is one of the most important shots in pickleball, especially in advanced play:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Soft Touch:</strong> Use a gentle, controlled motion. The goal is to place the ball 
                in the non-volley zone, not to hit it hard.</li>
                <li><strong>Low to High:</strong> Start with your paddle low and move upward through the ball 
                for better control and spin.</li>
                <li><strong>Target the Feet:</strong> Aim for your opponent's feet in the kitchen to force 
                difficult returns.</li>
                <li><strong>Cross-Court Dinks:</strong> Use cross-court dinks to create angles and open up the court.</li>
                <li><strong>Patience:</strong> Don't rush dink rallies. Wait for the right opportunity to attack.</li>
                <li><strong>Practice:</strong> Set up dink drills with a partner to improve consistency and placement.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Third Shot Strategies
              </h2>
              <p>
                The third shot (your team's first shot after the serve) is crucial:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Third Shot Drop:</strong> A soft shot that lands in the opponent's non-volley zone. 
                This allows you to move to the net and neutralize the opponent's advantage.</li>
                <li><strong>Third Shot Drive:</strong> A hard, low shot aimed at the opponent's feet. Can catch 
                opponents off guard but requires good control.</li>
                <li><strong>When to Use Each:</strong> Use drops when opponents are at the net, drives when they're 
                back or when you need to change pace.</li>
                <li><strong>Practice Both:</strong> Develop both shots so you can mix them up and keep opponents 
                guessing.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Net Play and Volleying
              </h2>
              <p>
                Controlling the net is key to winning in pickleball:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Get to the Net:</strong> After the third shot, move forward to the non-volley zone line.</li>
                <li><strong>Ready Position:</strong> Keep your paddle up and in front, ready to react quickly.</li>
                <li><strong>Soft Hands:</strong> Use a soft grip and absorb the ball's pace rather than swinging hard.</li>
                <li><strong>Angle Volleys:</strong> Use angles to hit winners and create openings.</li>
                <li><strong>Block Volleys:</strong> Learn to block hard shots back with control rather than trying 
                to overpower them.</li>
                <li><strong>Stay Out of the Kitchen:</strong> Be mindful of the non-volley zone - you can't volley 
                from there, but you can hit after a bounce.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Serving Strategies
              </h2>
              <p>
                A good serve sets up the point:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Deep Serves:</strong> Serve deep to push opponents back and give yourself time to get 
                to the net.</li>
                <li><strong>Vary Placement:</strong> Mix up serves to different areas to keep opponents guessing.</li>
                <li><strong>Consistency First:</strong> A consistent serve is better than a risky one that goes out.</li>
                <li><strong>Add Spin:</strong> Learn to add topspin or sidespin to make returns more difficult.</li>
                <li><strong>Target Weaknesses:</strong> If an opponent has a weak backhand, serve to that side.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Doubles Strategy
              </h2>
              <p>
                Effective doubles play requires teamwork and positioning:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Communication:</strong> Talk to your partner about who's taking shots, especially 
                middle balls.</li>
                <li><strong>Stacking:</strong> Learn stacking (positioning adjustments) to optimize court coverage 
                based on player strengths.</li>
                <li><strong>Cover the Middle:</strong> The middle of the court is vulnerable - coordinate with your 
                partner to cover it.</li>
                <li><strong>Poaching:</strong> When your partner is serving, you can "poach" (take) shots on your 
                side to surprise opponents.</li>
                <li><strong>Both at Net:</strong> Try to get both players to the net together - this creates the 
                strongest position.</li>
                <li><strong>Lob Strategy:</strong> Use lobs strategically to move opponents back, but be careful - 
                a bad lob is an easy put-away.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Shot Selection and Placement
              </h2>
              <p>
                Smart shot selection wins more points than power:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hit to Weaknesses:</strong> Identify and target your opponent's weaker side or shots.</li>
                <li><strong>Use Angles:</strong> Create angles to open up the court and force opponents to cover 
                more ground.</li>
                <li><strong>Change Pace:</strong> Mix soft shots with hard shots to disrupt opponent's rhythm.</li>
                <li><strong>Target the Middle:</strong> In doubles, shots down the middle can create confusion about 
                who should take the ball.</li>
                <li><strong>Go Behind:</strong> When opponents are moving forward, hit behind them to catch them 
                off balance.</li>
                <li><strong>Drop Shots:</strong> Use drop shots from the baseline to bring opponents to the net 
                on your terms.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Footwork and Court Movement
              </h2>
              <p>
                Good footwork is the foundation of good play:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Stay on Your Toes:</strong> Be ready to move in any direction quickly.</li>
                <li><strong>Split Step:</strong> Use a small hop (split step) when your opponent is about to hit 
                to improve reaction time.</li>
                <li><strong>Move Forward:</strong> After hitting, move forward toward the net when possible.</li>
                <li><strong>Recovery:</strong> After hitting a shot, recover to a good position for the next shot.</li>
                <li><strong>Balance:</strong> Maintain good balance - don't overcommit to shots that leave you 
                out of position.</li>
                <li><strong>Court Awareness:</strong> Know where you are on the court and where you should be.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Mental Game
              </h2>
              <p>
                The mental aspect of pickleball is just as important as physical skills:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Stay Focused:</strong> Don't dwell on mistakes - focus on the next point.</li>
                <li><strong>Positive Attitude:</strong> Maintain a positive attitude even when things aren't going well.</li>
                <li><strong>Patience:</strong> Don't try to force winners - wait for the right opportunity.</li>
                <li><strong>Adapt:</strong> Adjust your strategy based on what's working and what isn't.</li>
                <li><strong>Learn from Losses:</strong> Use losses as learning opportunities to identify areas 
                for improvement.</li>
                <li><strong>Visualization:</strong> Visualize successful shots and strategies before playing.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Practice Drills
              </h2>
              <p>
                Structured practice accelerates improvement:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dink Rallies:</strong> Practice extended dink rallies with a partner to improve touch 
                and consistency.</li>
                <li><strong>Third Shot Practice:</strong> Set up drills specifically for third shot drops and drives.</li>
                <li><strong>Volley Practice:</strong> Stand at the net and practice volleys with a partner.</li>
                <li><strong>Serve Practice:</strong> Practice serving to different targets to improve accuracy.</li>
                <li><strong>Movement Drills:</strong> Practice moving from baseline to net and back.</li>
                <li><strong>Game Situations:</strong> Practice specific game situations (like 3-2 score) to prepare 
                for pressure moments.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Physical Conditioning
              </h2>
              <p>
                Better fitness improves your game:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cardio:</strong> Good cardiovascular fitness helps you maintain energy throughout games.</li>
                <li><strong>Strength:</strong> Core and leg strength improve power and stability.</li>
                <li><strong>Flexibility:</strong> Stretching helps prevent injuries and improves range of motion.</li>
                <li><strong>Balance:</strong> Balance exercises improve court movement and shot stability.</li>
                <li><strong>Recovery:</strong> Allow time for rest and recovery between intense play sessions.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Learning from Better Players
              </h2>
              <p>
                One of the best ways to improve is to play with and learn from better players:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Play Up:</strong> Seek out games with players who are better than you.</li>
                <li><strong>Watch and Learn:</strong> Observe how advanced players position themselves and select shots.</li>
                <li><strong>Ask Questions:</strong> Don't be afraid to ask better players for tips and advice.</li>
                <li><strong>Take Lessons:</strong> Consider taking lessons from a certified pickleball instructor.</li>
                <li><strong>Join Leagues:</strong> Join organized leagues to play regularly against competitive players.</li>
                <li><strong>Watch Videos:</strong> Study instructional videos and professional matches online.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Common Mistakes to Avoid
              </h2>
              <p>
                Avoid these common pitfalls:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Overhitting:</strong> Trying to hit every shot as hard as possible - control is more important.</li>
                <li><strong>Poor Positioning:</strong> Not getting to the net after the third shot.</li>
                <li><strong>Kitchen Violations:</strong> Volleying from the non-volley zone - be aware of your position.</li>
                <li><strong>Lack of Patience:</strong> Trying to end points too quickly instead of building the point.</li>
                <li><strong>Poor Communication:</strong> In doubles, not communicating with your partner about shot selection.</li>
                <li><strong>Predictable Play:</strong> Using the same shots repeatedly - mix it up to keep opponents guessing.</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Put It Into Practice</h3>
                <p className="mb-4">
                  The best way to improve is through regular play. Find courts near you using our{' '}
                  <Link href="/courts" className="text-primary-600 hover:underline font-semibold">court directory</Link> and 
                  get out there to practice these techniques.
                </p>
                <p>
                  For beginners looking to build a foundation, check out our{' '}
                  <Link href="/guides/beginner" className="text-primary-600 hover:underline font-semibold">beginner's guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
