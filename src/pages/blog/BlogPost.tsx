import { ArrowLeft, Calendar, BookOpen, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogPost2 from "./BlogPost2";

const BlogPost = () => {
  const { slug } = useParams();

  // Define all posts here for now
  const posts = [
    {
      slug: "connecting-through-play-beginning-of-journey",
      title: "Connecting through play - the beginning of my journey",
      excerpt: "Supporing parents and carers of autistic children matters deeply because many, like myself, start out unaware of what autism truly is. Often, even doctors need to conduct numerous tests before confidently confirming an autism diagnosis, which can be frustrating and confusing for families.",
      category: "Personal Journey",
      date: "2025-07-24",
      readTime: "5 min read",
      author: "Meera",
      content: `
      <p class="text-lg leading-relaxed mb-6">
      
      Parents may feel overwhelmed when their child doesn’t respond to their name, shows repetitive behaviors, avoids eye contact, or doesn’t engage with other children, especially if they haven’t encountered the term "autism" before. Learning about autism can bring heartbreak as parents worry about their child’s current challenges and future well-being, leading to anxiety and distress. Sometimes we need to make big decisions for the children’s well-being. These decisions can range from changing them to the suitable special education, choosing the right support strategies to even moving to a new country if required like we did. Parents and carers must navigate these difficult emotions, build understanding, find hope and effective ways to support their children’s growth and happiness.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      In today’s blog, I want to share what parents can do immediately after their child has been identified as autistic.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      If you’re reading this, it’s likely you’ve recognized autism in your child. There are many interventions available such as Applied Behavior Analysis (ABA), Speech and Language Therapy, Occupational Therapy, Physical Therapy, Educational Programs, Augmentative and Alternative Communication (AAC), Social Skills Training, Sensory Integration Therapy, and more. It’s easy to feel overwhelmed wondering where to begin and which path to follow.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      My suggestion is simple: take time to sit, play, and enter your child’s world instead of rushing to therapy centres. Remember, your child has their whole life ahead to attend sessions. Just like our parents or grandparents sometimes started school late, young autistic children need time to play and connect with you, their siblings, and in the outdoors without pressure.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      I understand that outings like going to the park can be overwhelming for children, parents, and others. That’s why I take my son to the park during quiet times, like early mornings or late evenings. There’s more space, less crowd, and no judgment. He can explore freely such as running, climbing, or simply resting. For example, near our home is a busy ramp. When I noticed it emptied after 9 PM in summer, I began taking my son there. We run up and down the ramp together, slide, and relax. Moments like these are exactly what young autistic children need.
      Throughout this shared play, I made eye contact with my son, he joined in with me, initiated sliding, and followed my lead when it was time to go home. This is the connection all parents hope for and often the reason we reach out to therapists.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      In short, alongside professional therapies, never underestimate the power of simple, loving play. It builds bonds, communication, and trust foundations that support every step of your child’s journey.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      Follow my blog for more experiences from a Special Mom and special educator.
      </p>
      `
    },
    {
      slug: "turning-everyday-moments-into-therapy",
      title: "Turning Everyday Moments into Therapy",
      excerpt: "After reading my earlier blog, some of you might wonder, 'Is it really possible to get a autistic child to play in the park or even play together at home?' My answer is a confident yes! If your child isn't playing, it doesn't mean they don't want to, it often means they don't know how to play.",
      category: "Life Skills",
      date: "2025-08-07",
      readTime: "5 min read",
      author: "Meera",
      content: `
      <p class="text-lg leading-relaxed mb-6">
      As parents, it's our role to gently introduce them to play and show them how things work, both indoors and outdoors.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      To avoid overwhelming, choose off-peak times so there's less pressure and fewer distractions. Use the playground equipment with your child by showing them how to slide, swing, climb, and see how your child responds. Sometimes, you'll be surprised at what they try or master when given a chance at their own pace.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      Everyday routines offer so many opportunities:
      </p>
      <p class="text-lg leading-relaxed mb-6">
      <strong>Washing vegetables together:</strong> Let your child help you turn the tap on and off, feeling the difference between hot and cold water. This encourages sensory awareness and teaches practical skills. When they try adjusting taps elsewhere in the house, use it as a chance to continue teaching and generalizing the skill.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      <strong>Tidying up after play:</strong> Encourage your child to return toys or their favorite items to their proper place. For example, my son loves kitchen utensils and uses them as part of his stim. Afterward, I guide him to return them to their respective place, or help put plates and cutlery into the dishwasher, and wipe down the table after meals. These tasks develop independence, build hand-eye coordination, and improve cognitive growth.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      <strong>Laundry tasks:</strong> Involve your child in removing clothes from the washing machine, hanging them to dry with pegs, or sorting laundry. These activities develop both fine motor (peg use) and gross motor (carrying clothes) skills.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      <strong>Organizing groceries:</strong> Let your child open packets (using safe scissors), pour rice, pasta, or lentils into jars, and feel the different textures. This builds sensory experience and helps them work through sensitivities to touch and texture.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      With patience and creativity, these daily tasks become enjoyable moments of connection and valuable learning. As parents and carers, we truly can nurture our children's independence, sensory processing, and motor skills at home, often in fun and unexpected ways. And sometimes, our children will surprise us. Once, my son pulled over his stepping stool, washed a vegetable cutter I'd left behind, and placed it on the drying rack (all on his own), just by imitating what he'd seen me do.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      Everyday life is full of therapy opportunities. By joining your child in these simple routines, you help them grow, gain confidence, and celebrate their unique abilities, one small step at a time. Training them at home playfully on everyday tasks will make them play with you in the park. To them imitation is the game that they are learning from you.
      </p>
      `
    }
    ,
    {
      slug: "healthy-eating-starts-at-home",
      title: "Healthy Eating Starts at Home",
      excerpt: "Healthy eating habits can be built at home through routines, gentle changes, and family modeling—start small, introduce variety, and use favorites wisely.",
      category: "Life Skills",
      date: "2025-08-18",
      readTime: "6 min read",
      author: "Meera",
      content: `
      <p class="text-lg leading-relaxed mb-6">
      As we all know, every skill big or small can be challenging for our children. But while it may be hard, it is always possible. I believe that learning should begin at home, surrounded by parents, grandparents, and siblings. As a family member of a neurodivergent child, we sometimes need to make sacrifices in order to see progress. And just like in many other areas, early intervention can make a real difference in developing healthy eating habits.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      Many autistic children are picky eaters. I’ve noticed that a lot of children prefer sweets, crisps, or packaged foods. And because our children often love routines, they tend to stick to the same foods over and over. As parents or carers, we need to know when to maintain a routine and when to gently break it. For example, we should stick to meal times (breakfast, lunch, snack, dinner) but not necessarily serve the same food at every meal.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      Think about it! Would we enjoy having the same waffles or crisps three times a day, every day? Of course not! Even our children can get bored of the same food, but they may not know how to express it. That’s where we come in to slowly help them break the cycle. We should always keep in mind to include healthy foods filled with calcium, vitamins and minerals. Initially introduce one new food at a time, when they are ready gradually increase more new food.
      </p>
      <h3 class="text-2xl font-semibold text-foreground mb-4">Step 1: Change What You Buy</h3>
      <p class="text-lg leading-relaxed mb-6">
      The first and most important step is to stop buying or storing large amounts of junk food at home. For at least one meal a day, sit together as a family and eat healthy food in front of your child (strictly no gadgets or TV). Let your children see you having healthy food. Initially they might not want to eat. We will also notice some tantrums. Ignore them and start discussing the benefits of healthy food and continue to eat. Your child will go looking for their preferred snack. If they don’t find it, eventually they will reluctantly try what’s available. Don’t worry they won’t be harmed by missing one meal, and trust me it will work.
      </p>
      <h3 class="text-2xl font-semibold text-foreground mb-4">Step 2: Use Favorites as a Motivator</h3>
      <p class="text-lg leading-relaxed mb-6">
      For children who are more stubborn or resistant, you can use their favorite snack as a reward for trying new foods. Keep their preferred food out of sight and within your control. For example, if they love crisps, hold a packet in your hand and ask them to eat part of the meal you’ve made first. Once they try it, reward them with a few crisps. Over time, fade out this reward so they no longer expect it. The best time to introduce this method is during a long school holiday because consistency is the most important factor. For some children it will take weeks but for some it will just take a day.
      </p>
      <h3 class="text-2xl font-semibold text-foreground mb-4">Step 3: Match Foods to Your Child’s Preferences</h3>
      <p class="text-lg leading-relaxed mb-6">
      When introducing new foods, try to match the texture, taste, or spice level your child prefers. For example, I noticed my son liked crunchy sweets, so I replaced them with homemade nut balls made from dates and dried figs for sweetness. Instead of packaged crisps, I baked sweet potato or regular potato crisps at home.
      </p>
      <p class="text-lg leading-relaxed mb-6">
      And always remember variety matters. It is a lot of work to prepare new and healthy options that still appeal to your child’s taste preferences, but the results will make you happy and ready for the next challenge.
      </p>
      `
    }
  ];

  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Blog post not found.</h2>
        <Button asChild variant="ghost" className="ml-4">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-4 w-4 mr-2" />
              By {post.author}
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <h3 className="font-serif text-xl font-bold text-foreground mb-4">
            Want to share your experience or ask questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'd love to hear from you and connect with other parents and carers on similar journeys.
          </p>
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;