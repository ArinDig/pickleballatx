import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Pickleball Etiquette: Do\'s and Don\'ts on the Court',
  description: 'Learn the unwritten rules of pickleball. From calling lines to court rotation and doubles communication, this guide covers everything you need to know to be a great pickleball player and neighbor on the court.',
  keywords: [
    'pickleball etiquette',
    'pickleball rules of conduct',
    'pickleball court manners',
    'pickleball sportsmanship',
    'pickleball do\'s and don\'ts',
    'pickleball court rotation',
    'pickleball line calls',
    'pickleball doubles communication'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/etiquette',
  },
}

export default function EtiquetteGuidePage() {
  const publishedDate = '2026-01-15'
  const modifiedDate = new Date().toISOString().split('T')[0]

  return (
    <div>
      {/* Article Schema */}
      <Script
        id="article-schema-etiquette"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Pickleball Etiquette: Do\'s and Don\'ts on the Court',
            description: 'Learn the unwritten rules of pickleball. From calling lines to court rotation and doubles communication, this guide covers everything you need to know to be a great pickleball player.',
            image: 'https://pickleballatx.org/images/og-image.jpg',
            datePublished: publishedDate,
            dateModified: modifiedDate,
            author: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
              url: 'https://pickleballatx.org'
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
              '@id': 'https://pickleballatx.org/guides/etiquette'
            },
            articleSection: 'Guides',
            keywords: 'pickleball etiquette, pickleball sportsmanship, pickleball court manners'
          })
        }}
      />
      {/* BreadcrumbList Schema */}
      <Script
        id="breadcrumb-schema-etiquette"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://pickleballatx.org'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guides',
                item: 'https://pickleballatx.org/guides'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Pickleball Etiquette',
                item: 'https://pickleballatx.org/guides/etiquette'
              }
            ]
          })
        }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <Link href="/guides" className="inline-flex items-center text-primary-100 hover:text-white mb-4">
            <FaArrowLeft className="mr-2" />
            Back to Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pickleball Etiquette: Do&apos;s and Don&apos;ts on the Court
          </h1>
          <p className="text-xl text-primary-50">
            The unwritten rules that make pickleball one of the most welcoming sports around
          </p>
          <p className="text-primary-100/90 text-sm mt-4">
            By Pickleball ATX · Published January 15, 2026 · Last updated {modifiedDate}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-gray-800">
                One of pickleball&apos;s best qualities is its culture. The sport has a genuine reputation
                for being welcoming, fun, and good-spirited — but that culture doesn&apos;t happen by accident.
                It&apos;s built and maintained by players who know the unwritten rules. Whether you&apos;re new to
                the sport or just new to a court, this guide walks you through the etiquette that keeps
                the game enjoyable for everyone.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Line Calls: The Foundation of Fair Play</h2>
            <p>
              Pickleball, like tennis, is largely self-officiated. That means players are responsible for
              calling balls in or out on their own side of the court — and doing it honestly. This is where
              etiquette starts.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">The Golden Rule of Line Calls</h3>
            <p>
              If you&apos;re not certain a ball was out, call it in. The burden of proof is on the player
              making the &quot;out&quot; call — if there&apos;s genuine doubt, the benefit goes to the opponent. This
              applies even if you think it was probably out. Probably isn&apos;t certain.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Call out balls promptly and clearly</strong> — say &quot;Out!&quot; loudly enough for everyone
              to hear. Don&apos;t wait, and don&apos;t mumble.</li>
              <li><strong>Only call balls on your side of the net.</strong> You have no jurisdiction over
              your opponent&apos;s side. If you think their ball was out, you can mention it, but the call
              belongs to them.</li>
              <li><strong>Accept your opponent&apos;s calls graciously.</strong> If they call a ball out that
              you thought was in, the call stands. Arguing line calls is bad form and damages the game&apos;s
              culture.</li>
              <li><strong>Never make a bad-faith call</strong> to gain a point. Pickleball runs on trust —
              players who can&apos;t be trusted don&apos;t last long in any community.</li>
            </ul>
            <p>
              In tournament play, a referee makes final calls. In recreational play, assume everyone is
              acting in good faith unless there&apos;s a pattern that suggests otherwise.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Court Rotation at Busy Venues</h2>
            <p>
              At public courts and open play sessions — especially busy ones — there&apos;s typically a rotation
              system to ensure everyone gets court time. Respecting this system is non-negotiable etiquette.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">How Rotation Typically Works</h3>
            <p>
              The most common system at Austin&apos;s public courts: winners stay on, losers rotate off.
              Waiting players take the spots of the losing team. Some courts use a paddle queue — players
              place their paddle on a rack or fence in the order they arrived, and games form from the
              queue.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Learn the local system before assuming.</strong> Ask other players or look for
              posted signs. Different courts in Austin handle rotation differently.</li>
              <li><strong>Don&apos;t &quot;cherry-pick&quot; weak opponents</strong> to stay on court longer. Play whoever
              is next in rotation.</li>
              <li><strong>Rotate off promptly</strong> when your game ends. Don&apos;t linger on court while
              waiting players are ready.</li>
              <li><strong>If you step away</strong> for water or a break and return, go to the back of
              the queue — don&apos;t reclaim your spot.</li>
              <li><strong>Don&apos;t monopolize courts</strong> during peak hours by playing extra-long games
              or running scores past 11 when people are waiting.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Between Points: Pace and Flow</h2>
            <p>
              Pickleball moves fast, and keeping pace between points matters both for the flow of the
              game and for courtesy to your opponents.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Call the score before each serve.</strong> In recreational play, it&apos;s the
              server&apos;s responsibility to announce the score clearly before serving. This prevents
              disputes and keeps everyone on the same page.</li>
              <li><strong>Wait for your opponents to be ready</strong> before serving. Make eye contact
              or wait for a nod. Don&apos;t quick-serve.</li>
              <li><strong>Return balls that roll onto your court</strong> from adjacent courts promptly —
              kick them or hand them back without making the other players wait.</li>
              <li><strong>Stop play if a ball rolls onto your court</strong> mid-point. Call &quot;Ball!&quot; and
              replay the point. A ball underfoot is a safety issue.</li>
              <li><strong>Don&apos;t stall between points</strong> to catch your breath or disrupt your
              opponent&apos;s rhythm. Take your time, but be reasonable.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Doubles Communication and Partnership</h2>
            <p>
              Doubles is the dominant format in pickleball, and how partners communicate — or fail to —
              has a big impact on both the game and the experience of playing together.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Calling Shots During Play</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>&quot;Mine!&quot; and &quot;Yours!&quot;</strong> are the most important words in doubles. Call
              them early and loudly — especially on balls down the middle, which cause the most
              confusion and collisions.</li>
              <li><strong>The player with the forehand on the middle</strong> usually has priority on
              center balls, but establish this with your partner before playing, not during a point.</li>
              <li><strong>Communicate between points</strong> about strategy — where to serve, who&apos;s
              covering what, what to do on the next point. Keep it brief and constructive.</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Handling Mistakes</h3>
            <p>
              How you respond to your partner&apos;s mistakes is a real test of etiquette — and frankly,
              character.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Never criticize your partner</strong> during a game, especially in recreational
              play. A simple &quot;No worries&quot; or silence is always better than a grimace or comment.</li>
              <li><strong>Don&apos;t give unsolicited coaching</strong> to your partner. If they want advice,
              they&apos;ll ask. Focus on your own game.</li>
              <li><strong>Acknowledge good shots</strong> from your partner and your opponents. Saying
              &quot;Nice shot&quot; costs nothing and goes a long way.</li>
              <li><strong>If you make an error, move on.</strong> Extended self-flagellation slows the
              game and puts pressure on your partner to console you.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Interacting with Opponents</h2>
            <p>
              Pickleball is inherently social — you&apos;re close enough to your opponents to have a real
              conversation, and the culture leans into that.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Introduce yourself</strong> before the game, especially if you haven&apos;t played
              together before. A quick handshake or wave goes a long way.</li>
              <li><strong>Acknowledge good shots from your opponents.</strong> A quick &quot;Nice shot!&quot; or
              &quot;Great get!&quot; is part of the sport&apos;s culture and costs nothing.</li>
              <li><strong>Don&apos;t taunt, trash talk, or celebrate excessively.</strong> A fist pump after
              a great point is fine. Extended celebrations at an opponent&apos;s expense are not.</li>
              <li><strong>After the game,</strong> shake hands (or paddle tap) and thank your opponents
              for the game, regardless of the outcome.</li>
              <li><strong>If there&apos;s a disputed call,</strong> the most common resolution is to replay
              the point. Offer it before things get tense.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Playing with Mixed Skill Levels</h2>
            <p>
              Open play at Austin courts brings together players of wildly different skill levels.
              Navigating that gap gracefully is one of the more nuanced aspects of pickleball etiquette.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">If You&apos;re the Better Player</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dial it back appropriately.</strong> Playing full-throttle against a beginner
              isn&apos;t impressive — it&apos;s inconsiderate. Adjust your pace to create longer rallies and a
              better experience for everyone.</li>
              <li><strong>Offer encouragement, not instruction,</strong> unless asked. A well-meaning
              tip mid-game often comes across as condescending.</li>
              <li><strong>Don&apos;t consistently target the weakest player</strong> to win points. It&apos;s
              legal, but it&apos;s poor form in casual play.</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">If You&apos;re the Newer Player</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Be honest about your level</strong> when joining games. Most players would
              rather adjust their game for a new player than be surprised mid-match.</li>
              <li><strong>Ask questions before or after the game,</strong> not during points.</li>
              <li><strong>Focus on improvement, not just winning.</strong> Nobody expects new players
              to win every rally — they do expect effort and good attitude.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Noise and Court Awareness</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Keep noise reasonable</strong> at indoor facilities. Shouts, loud music, and
              extended celebrations can disrupt play on adjacent courts.</li>
              <li><strong>At outdoor courts,</strong> be mindful of nearby residents, especially in
              the early morning or evening.</li>
              <li><strong>Keep your phone on silent</strong> during play. Step off to the side if you
              need to take a call.</li>
              <li><strong>Keep the court clean.</strong> Pick up your water bottles, towels, and any
              gear you bring. Leave the court as you found it.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Etiquette at Austin&apos;s Public Courts</h2>
            <p>
              Austin&apos;s public courts — at facilities like Dittmar Recreation Center, Pan Am Recreation
              Center, and South Austin Recreation Center — have their own considerations worth keeping
              in mind.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Follow posted rules.</strong> City rec centers often have specific policies
              about court usage, open play times, and reservation systems.</li>
              <li><strong>Be welcoming to first-timers.</strong> Public courts attract players who are
              completely new to the sport. A friendly greeting and a quick explanation of how things
              work makes a big difference.</li>
              <li><strong>Don&apos;t block pathways or entrances</strong> with bags, extra paddles, or
              chairs. Keep spectator areas clear.</li>
              <li><strong>If the courts are full,</strong> add your name to the queue and wait. Don&apos;t
              pressure players to cut their games short.</li>
            </ul>
            <p>
              Check our <Link href="/courts/free" className="text-primary-600 hover:underline">free courts guide</Link> for
              details on Austin&apos;s best public pickleball options, including open play schedules and
              what to expect at each venue.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Quick Reference: Do&apos;s and Don&apos;ts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">✓ Do&apos;s</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Call the score before every serve</li>
                  <li>✓ Give benefit of the doubt on line calls</li>
                  <li>✓ Say &quot;nice shot&quot; when appropriate</li>
                  <li>✓ Rotate off promptly when your game ends</li>
                  <li>✓ Communicate clearly with your partner</li>
                  <li>✓ Stop play when a ball rolls onto your court</li>
                  <li>✓ Wait for opponents to be ready before serving</li>
                  <li>✓ Introduce yourself to new players</li>
                  <li>✓ Shake hands or paddle-tap after the game</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">✗ Don&apos;ts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ Call balls out on your opponent&apos;s side</li>
                  <li>✗ Quick-serve before opponents are ready</li>
                  <li>✗ Criticize your partner during a game</li>
                  <li>✗ Give unsolicited coaching</li>
                  <li>✗ Trash talk or taunt opponents</li>
                  <li>✗ Play music loudly at shared courts</li>
                  <li>✗ Skip the rotation queue</li>
                  <li>✗ Slam your paddle in frustration</li>
                  <li>✗ Leave trash or gear on the court</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Find a Court?</h3>
              <p className="mb-4">
                Now that you know the unwritten rules, find the right Austin court for your game —
                whether you&apos;re looking for free public courts, indoor climate-controlled facilities,
                or competitive venues.
              </p>
              <Link href="/courts" className="btn btn-primary">
                Browse Austin Courts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
