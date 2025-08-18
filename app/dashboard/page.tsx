import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  MessageSquare,
  TrendingUp,
  Zap,
  BarChart3,
  PieChart,
  AlertTriangle,
  HandHeart,
  FileText,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Reputation at a Glance</h1>
          <p className="text-muted-foreground">Monitor and manage your online reputation in real-time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                  <p className="text-3xl font-bold text-foreground">4.6 / 5</p>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 || (i === 4 && 0.6 > 0) ? "text-primary fill-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Reviews</p>
                  <p className="text-3xl font-bold text-foreground">1,247</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+23 this week</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Reputation Score</p>
                  <p className="text-3xl font-bold text-primary">87/100</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+3 this month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                  <p className="text-3xl font-bold text-foreground">94%</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">Excellent</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Line Chart - Reputation Score Trend */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Reputation Score Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-end justify-between gap-2 px-4">
                {[82, 84, 85, 86, 86, 87].map((value, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div
                      className="bg-primary rounded-t-sm w-6 transition-all hover:bg-primary/80"
                      style={{ height: `${((value - 80) / 20) * 150}px` }}
                    ></div>
                    <span className="text-xs text-muted-foreground">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                    </span>
                    <span className="text-xs font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pie Chart - Review Sources */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Review Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { source: "Google", count: 687, percentage: 55, color: "bg-blue-500" },
                { source: "Trustpilot", count: 312, percentage: 25, color: "bg-green-500" },
                { source: "Yelp", count: 187, percentage: 15, color: "bg-red-500" },
                { source: "Facebook", count: 61, percentage: 5, color: "bg-purple-500" },
              ].map((item) => (
                <div key={item.source} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm text-foreground">{item.source}</span>
                      <span className="text-sm text-muted-foreground">({item.count})</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Bar Chart - Sentiment Breakdown */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Sentiment Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { sentiment: "Positive", count: 1089, percentage: 87, color: "bg-green-500" },
                  { sentiment: "Neutral", count: 112, percentage: 9, color: "bg-yellow-500" },
                  { sentiment: "Negative", count: 46, percentage: 4, color: "bg-red-500" },
                ].map((item) => (
                  <div key={item.sentiment} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="text-sm text-foreground">{item.sentiment}</span>
                        <span className="text-sm text-muted-foreground">({item.count})</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items section made full width */}
        <div className="mb-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Action Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 border border-red-500/20 bg-red-500/5 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Negative Review Alerts</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This is where GuardX will flag reviews needing urgent response.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border border-primary/20 bg-primary/5 rounded-lg">
                  <HandHeart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Response Queue</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Here you'll see reviews waiting for acknowledgment or thanks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border border-border bg-muted/5 rounded-lg">
                  <FileText className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Weekly Report</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Summary of reputation health, sent automatically.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-muted/5 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            GuardX Reputation Dashboard — a clear overview of performance, reviews, and key reputation metrics.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
