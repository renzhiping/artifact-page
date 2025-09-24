import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Layers, BookOpen, ArrowRight, BarChart3, Calendar, Target, Users, Route } from 'lucide-react'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <BookOpen className="w-10 h-10 text-blue-600" />
                        <h1 className="text-4xl font-bold text-gray-800">AI学习资源中心</h1>
                    </div>
                    <p className="text-xl text-gray-600 mb-8">探索人工智能的核心概念，掌握机器学习的关键技术</p>
                </div>

                {/* Course Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
                    {/* Neural Network Card */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-200">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                                <Brain className="w-8 h-8 text-indigo-600" />
                            </div>
                            <CardTitle className="text-2xl text-indigo-700">知识问答</CardTitle>
                            <CardDescription className="text-gray-600">
                                学习神经元、权重和偏置等核心概念，理解AI的智能决策系统
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Link href="/neural-network">
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                                    开始学习
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Clustering Card */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                                <Layers className="w-8 h-8 text-teal-600" />
                            </div>
                            <CardTitle className="text-2xl text-teal-700">学习资源推荐</CardTitle>
                            <CardDescription className="text-gray-600">
                                掌握无监督学习的核心应用，学习数据自主分组与模式发现
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Link href="/clustering">
                                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                                    开始学习
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Learning Analysis Card */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                                <BarChart3 className="w-8 h-8 text-purple-600" />
                            </div>
                            <CardTitle className="text-2xl text-purple-700">个人学习情况分析</CardTitle>
                            <CardDescription className="text-gray-600">
                                AI智能分析学习状态，精准定位优势与薄弱环节，个性化学习建议
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Link href="/learning-analysis">
                                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                    查看分析
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Learning Plan Card */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-cyan-200">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                                <Calendar className="w-8 h-8 text-cyan-600" />
                            </div>
                            <CardTitle className="text-2xl text-cyan-700">个人学习规划</CardTitle>
                            <CardDescription className="text-gray-600">
                                个性化学习路径规划，深度案例分析，3天强化学习计划
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Link href="/learning-plan">
                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                                    制定计划
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Coverage Analysis Card */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                                <Target className="w-8 h-8 text-orange-600" />
                            </div>
                            <CardTitle className="text-xl text-orange-700">资源覆盖度分析</CardTitle>
                            <CardDescription className="text-gray-600 text-sm">
                                分析题库对教材知识点的覆盖情况，智能生成改进建议
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Link href="/coverage-analysis">
                                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                    查看分析
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Class Analysis Card */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                                <Users className="w-8 h-8 text-teal-600" />
                            </div>
                            <CardTitle className="text-xl text-teal-700">班级学习情况分析</CardTitle>
                            <CardDescription className="text-gray-600 text-sm">
                                分析班级整体学习状况，识别普遍难点和重点关注学生
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Link href="/class-analysis">
                                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                                    查看分析
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* System Response Timeline Card */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-200">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                                <Route className="w-8 h-8 text-slate-700" />
                            </div>
                            <CardTitle className="text-xl text-slate-800">系统响应时间线</CardTitle>
                            <CardDescription className="text-gray-600 text-sm">
                                复刻 Manus 处理流程，查看 AI 助手如何逐步生成学习规划
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Link href="/system-response">
                                <Button className="w-full bg-slate-700 hover:bg-slate-800">
                                    查看流程
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Features */}
                <Card className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                    <CardContent className="p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">为什么选择我们的学习平台？</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                                <h3 className="font-semibold mb-2">系统化学习</h3>
                                <p className="text-blue-100 text-sm">从基础概念到实践应用，完整的知识体系</p>
                            </div>
                            <div>
                                <Brain className="w-8 h-8 mx-auto mb-2" />
                                <h3 className="font-semibold mb-2">权威内容</h3>
                                <p className="text-blue-100 text-sm">结合课程教材与互联网精选资源</p>
                            </div>
                            <div>
                                <Layers className="w-8 h-8 mx-auto mb-2" />
                                <h3 className="font-semibold mb-2">实践导向</h3>
                                <p className="text-blue-100 text-sm">配套实验和练习，理论结合实践</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-12 text-gray-500">
                    <p className="text-sm">© 2024 AI学习资源中心 - 让人工智能学习更简单</p>
                </div>
            </div>
        </main>
    )
}
