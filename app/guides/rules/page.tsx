import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pickleball Rules Explained: What to Know Before Playing in Austin (2026)',
  description: 'Complete guide to pickleball rules, scoring, and kitchen rules — framed for Austin open play and leagues. What you actually need to know before showing up on an Austin court.',
  keywords: [
    'pickleball rules Austin',
    'pickleball scoring',
    'pickleball kitchen rules',
    'how to play pickleball Austin',
    'pickleball rules open play',
    'pickleball game rules Texas',
    'pickleball rules for beginners Austin',
    'Austin pickleball open play rules'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/rules',
  },
}

export default function RulesPage() {
  const publishedDate = '2025-03-20'
  const modifiedDate = '2026-06-12'

  const faqItems = [
    {
      question: 'What are the basic rules of pickleball for beginners?',
      answer: 'Pickleball is played to 11 points (win by 2), using an underhand serve, with a two-bounce rule after the serve. The kitchen (non-volley zone) is the 7-foot area near the net where you cannot volley the ball. Only the serving team scores in traditional scoring. In doubles, each team gets two serves before the serve switches.'
    },
    {
      question: 'What is the kitchen rule in pickleball?',
      answer: 'You cannot volley (hit the ball in the air) while standing in or touching the non-volley zone (the kitchen). You CAN hit the ball out of the kitchen after it bounces. If your momentum carries you into the kitchen after a volley, that is also a fault — even if you had already left the zone when you hit.'
    },
    {
      question: 'Do Austin courts use traditional or rally scoring?',
      answer: 'Most Austin open play and recreational courts use traditional side-out scoring (only the server scores). Some organized clinics and leagues may use rally scoring for time management — always check with the organizer. ATPC leagues primarily use traditional scoring.'
    },
    {
      question: 'What happens if the serve hits the net in pickleball?',
      answer: 'If the serve hits the net and lands in the correct service area, it is a "let" and the serve is replayed. If it hits the net and lands outside the service area, or hits the net and does not go over, it is a fault.'
    },
    {
      question: 'How does serving work in doubles pickleball?',
      answer: 'Each team gets two serves (one per player) before the serve switches to the other team, with one exception: at the very start of the game, the first serving team only gets one serve. The server calls the score before each serve as three numbers: serving team score, receiving team score, server number (1 or 2).'
    },
    {
      question: 'What is the two-bounce rule in pickleball?',
      answer: 'After the serve, the receiving team must let the ball bounce before returning it. Then the serving team must also let that return bounce before hitting it. After those two bounces, both teams can volley or let it bounce — your choice. This prevents serve-and-volley dominance and keeps rallies going.'
    },
    {
      question: 'What are common faults called in Austin open play?',
      answer: 'Kitchen violations (volleying in the non-volley zone) and double-bouncing are the most common. Players call their own out balls in open play — if you see it clearly out, call it immediately. If you are unsure, it is in. Most Austin open play follows an honor system with good sportsmanship expected.'
    },
  ]

  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema-rules"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Pickleball Rules Explained: What to Know Before Playing in Austin (2026)',
            description: 'Complete guide to pickleball rules, scoring, and kitchen rules — framed for Austin open play and leagues.',
            image: 'https://pickleballatx.org/images/og-image.jpg',
            datePublished: publishedDate,
            dateModified: modifiedDate,
            author: {
              '@type': 'Person',
              name: 'Arin Brown',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
              logo: {
                '@type': 'ImageObject',
                url: 'https://pickleballatx.org/images/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://pickleballatx.org/guides/rules',
            },
            articleSection: 'Guides',
          }),
        }}
      />

      {/* FAQPage Schema */}
      <Script
        id="faq-schema-rules"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
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
              Pickleball Rules: What to Know Before Playing in Austin
            </h1>
            <p className="text-xl text-primary-50">
              Official rules, scoring, kitchen rules, and how they apply in Austin open play and leagues
            </p>
            <p className="text-primary-100/90 text-sm mt-4">
              By Arin Brown · Updated June 12, 2026
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="lead">
                Pickleball&apos;s rules are not complicated, but a few of them — particularly the kitchen and
                the two-bounce rule — catch new players off guard in ways that disrupt open play. This guide
                covers the official rules as established by USA Pickleball, with specific callouts for how
                they apply in Austin open play at courts like ATPC, Onion Creek, and Parmer Lane. Know these
                before you show up and you&apos;ll be a welcome addition to any rotation.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded">
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Four Rules That Matter Most</h3>
                <p>
                  If you only learn four things before your first Austin open play session, make it these:
                  (1) serve underhand, (2) let the ball bounce twice before volleying, (3) don&apos;t volley
                  from the kitchen, and (4) call your own out balls honestly. Everything else you&apos;ll
                  pick up in the first game.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Court Dimensions and Setup
              </h2>
              <p>
                A pickleball court is 20 feet wide and 44 feet long — roughly a third the size of a tennis
                court. Most Austin parks stripe their courts clearly. Here&apos;s what you&apos;re looking at:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Baseline:</strong> The back line of the court (22 feet from the net) — where you
                serve from</li>
                <li><strong>Non-Volley Zone (Kitchen):</strong> The 7-foot area on both sides of the net — no
                volleying here under any circumstances</li>
                <li><strong>Service Areas:</strong> The court is divided into right and left service boxes on
                each side of the net</li>
                <li><strong>Net Height:</strong> 36 inches at the sidelines, 34 inches at the center — lower
                in the middle, which is why cross-court shots are strategically safer</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Scoring System
              </h2>
              <p>
                Standard pickleball uses traditional side-out scoring. This is what you&apos;ll encounter at
                most Austin open play sessions and ATPC leagues:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Games are played to 11 points</strong>, must win by 2. Tournament games sometimes
                go to 15 or 21.</li>
                <li><strong>Only the serving team can score.</strong> If the receiving team wins the rally,
                they earn the serve — not a point.</li>
                <li><strong>Score is called as three numbers before each serve:</strong> serving team score,
                receiving team score, server number (1 or 2 in doubles). Example: &quot;4-2-1&quot; means
                server has 4, other team has 2, first server is up.</li>
                <li><strong>Austin open play tip:</strong> In casual rotation play at park courts, some groups
                skip the score call for speed. In any organized or league context, always call it — it&apos;s
                part of the game and prevents disputes.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Serving Rules
              </h2>
              <p>
                The serve has more rules than most players realize. All of these apply at every Austin court:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Underhand only:</strong> The paddle must contact the ball below your waist, and
                the motion must be upward arc (not sidearm, not overhand).</li>
                <li><strong>Foot position:</strong> At least one foot must be behind the baseline. Stepping on
                or over the line before contact is a foot fault.</li>
                <li><strong>Where it must land:</strong> Diagonally across the net into the opponent&apos;s
                service box — the serve cannot land in the kitchen or on the kitchen line.</li>
                <li><strong>Let serve:</strong> If your serve hits the net and lands in the correct service
                box, it&apos;s replayed. If it hits the net and falls short or lands out, it&apos;s a fault.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                The Two-Bounce Rule (Double Bounce Rule)
              </h2>
              <p>
                This is the rule that most confuses newcomers. It exists to prevent serve-and-volley dominance
                and is strictly enforced in Austin open play — violating it is the most common beginner mistake.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>After the serve, the <strong>receiving team must let it bounce</strong> before returning.</li>
                <li>After the return, the <strong>serving team must also let it bounce</strong> before hitting.</li>
                <li>After those two bounces — one on each side — both teams can volley or let it bounce at
                their discretion.</li>
                <li>In practice: don&apos;t rush to the net before the serve is returned and that return has
                bounced on your side. New players who sprint to the net after serving and volley the return
                will hear &quot;two-bounce!&quot; called immediately.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Non-Volley Zone: The Kitchen Rules
              </h2>
              <p>
                The kitchen is where most pickleball disputes happen in Austin open play. These rules are
                non-negotiable and apply to every inch of the 7-foot zone, including the kitchen line itself:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>You cannot volley from the kitchen.</strong> Volleying means hitting the ball
                before it bounces. If any part of your body (or paddle, on the swing) is touching the kitchen
                or kitchen line when you volley, it&apos;s a fault.</li>
                <li><strong>You CAN hit from the kitchen after the ball bounces in it.</strong> Step in, let
                it bounce, hit — that&apos;s perfectly legal and how dinking works.</li>
                <li><strong>Momentum fault:</strong> If you volley near the kitchen line and your momentum
                carries you into the zone after contact, it&apos;s a fault — even if you were legal at the
                moment of contact. You must re-establish both feet outside the kitchen before hitting again.</li>
                <li><strong>Austin open play tip:</strong> At competitive open play sessions (especially ATPC),
                momentum faults are called regularly. At casual park courts they&apos;re sometimes let go —
                but calling them is correct, and good players will call them on themselves.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Doubles Serving Rotation
              </h2>
              <p>
                The doubles serving rotation is the most confusing part of pickleball for new players — but
                once it clicks, it&apos;s intuitive:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Game starts with one serve for the first team (second server is skipped to balance the
                first-serve advantage).</li>
                <li>Server starts from the right side when their score is even, left side when odd.</li>
                <li>Win the rally, switch sides with your partner and serve again.</li>
                <li>Lose the rally, your partner becomes server 2 and serves from where they stand.</li>
                <li>Partner loses the rally, serve goes to the other team — they start with server 1.</li>
              </ol>
              <p>
                The easiest way to remember: you switch sides with your partner every time your team scores.
                Your position on the court always reflects the current score — even score, right side; odd
                score, left side.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Faults and How They&apos;re Called in Austin Open Play
              </h2>
              <p>
                A fault ends the rally. In organized Austin play, players call their own out balls — honesty
                is expected. Here are the most common:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kitchen violation:</strong> Volleying in the NVZ, or momentum carrying you in
                after a volley near the line.</li>
                <li><strong>Two-bounce violation:</strong> Volleying before the required bounces have
                occurred.</li>
                <li><strong>Out of bounds:</strong> Ball lands outside the court. At Austin park courts with
                multiple side-by-side courts, be especially careful about calling cross-court shots that are
                close to the boundary — they&apos;re your call to make.</li>
                <li><strong>Serve faults:</strong> Wrong service box, foot fault, ball hits the kitchen line
                on a serve, overhand serve.</li>
                <li><strong>Double hit:</strong> Hitting the ball twice with your paddle on the same shot
                (continuous motion with one ball strike is legal; a distinct second contact is a fault).</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Line Calls and Sportsmanship at Austin Courts
              </h2>
              <p>
                Austin&apos;s pickleball community has a strong culture of good sportsmanship. Here&apos;s
                how line calls work in practice:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>If it touches the line, it&apos;s in.</strong> Lines are part of the court — a
                ball that clips the line is good. Exception: on the serve, a ball that lands on the kitchen
                line is a fault (the kitchen line counts as the kitchen).</li>
                <li><strong>Call immediately.</strong> If you see a ball land out, call it right when it
                happens — not after you fail to return it. Delayed out calls after attempted shots are not
                accepted.</li>
                <li><strong>If you&apos;re unsure, it&apos;s in.</strong> Give your opponent the benefit of
                the doubt. Austin&apos;s regulars will respect this, and you&apos;ll earn a reputation as a
                fair player worth playing with.</li>
                <li><strong>No replays for close calls.</strong> Once a ball is called out or in, the point
                stands. There are no do-overs for disputed line calls in recreational play.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Common Situations Worth Knowing
              </h2>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ball Hits the Net During a Rally</h3>
                <p>If the ball hits the net and goes over during a rally, play continues — the point
                is live. Only serves that hit the net get a replay (let). If the ball hits the net and
                does not go over, it&apos;s a fault.</p>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ball From Another Court</h3>
                <p>At busy Austin courts like Onion Creek where multiple games run side by side, a ball
                rolling onto your court mid-rally is grounds for a &quot;let&quot; — call it immediately,
                stop play, and replay the point. Don&apos;t wait until after the rally.</p>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ball Hits a Player or Clothing</h3>
                <p>If the ball hits any part of a player or their clothing (except the paddle hand below
                the wrist on a valid swing), it&apos;s a fault for that player regardless of where they
                were standing.</p>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Singles vs. Doubles</h3>
                <p>Same court, same rules — with one difference: in singles, each player has only one
                serve (no server 2). Server serves from the right when their score is even, left when
                odd. No partner to call the middle ball.</p>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find a Court?</h3>
                <p className="mb-4">
                  Now that you know the rules, find somewhere to play. Our{' '}
                  <Link href="/courts" className="text-primary-600 hover:underline font-semibold">Austin court directory</Link> covers
                  all 29 local courts with hours, surfaces, and open play info.
                </p>
                <p className="mb-4">
                  New to the game? Check out our{' '}
                  <Link href="/guides/best-courts-beginners" className="text-primary-600 hover:underline font-semibold">best courts for beginners</Link> to
                  find a welcoming spot for your first session.
                </p>
                <p>
                  For the complete official rulebook, visit{' '}
                  <a href="https://usapickleball.org" target="_blank" rel="noopener noreferrer"
                  className="text-primary-600 hover:underline">USA Pickleball</a> — the governing body
                  for the sport in the United States.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
