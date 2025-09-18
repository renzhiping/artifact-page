"use client";

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    BarChart3, TrendingUp, AlertTriangle, CheckCircle,
    Brain, Target, BookOpen, Lightbulb, User,
    Activity, Award, RefreshCw, ArrowRight
} from 'lucide-react'
import Navigation from './navigation'

const LearningAnalysis = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <Navigation />

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                        <h1 className="text-3xl font-bold text-gray-800">学习情况分析报告</h1>
                    </div>
                    <p className="text-lg text-gray-600">AI智能分析，精准定位学习状态</p>
                </div>

                {/* Student Question */}
                <Card className="mb-8 border-l-4 border-l-blue-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-700">
                            <User className="w-5 h-5" />
                            学生问题
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-gray-700 italic">
                                "我感觉课程内容有点多，你能帮我分析一下我目前的学习情况吗？我不知道该重点复习哪里。"
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Analysis Response */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-700">
                            <Brain className="w-5 h-5" />
                            AI 助手分析
                        </CardTitle>
                        <CardDescription>基于课程文档的阅读进度和章节测验数据分析</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            好的，我分析了你近期的学习记录（基于课程文档的阅读进度和章节测验）：
                        </p>
                    </CardContent>
                </Card>

                {/* Student Profile Card */}
                <Card className="mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <User className="w-6 h-6" />
                            【同学 A】的学习分析报告
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Activity className="w-8 h-8" />
                                <div>
                                    <h3 className="text-lg font-semibold">整体进度</h3>
                                    <p className="text-indigo-100">课程总进度完成情况</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold">50%</div>
                                <p className="text-indigo-100 text-sm">已完成</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Strengths Analysis */}
                <Card className="mb-8 border-l-4 border-l-green-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-700 text-xl">
                            <CheckCircle className="w-6 h-6" />
                            强项分析 (掌握扎实)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <div className="flex items-start gap-3 mb-4">
                                <Badge className="bg-green-600 text-white mt-1">知识域</Badge>
                                <div>
                                    <h3 className="text-lg font-semibold text-green-800 mb-2">AI 基础概念</h3>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="text-sm font-medium text-green-700">知识点：</p>
                                            <p className="text-gray-700 text-sm">'AI 智能源于数据'、'什么是数据'、'机器学习导论'</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-green-700">分析：</p>
                                            <p className="text-gray-700 text-sm">
                                                相关章节的测验正确率均在 <strong className="text-green-600">90% 以上</strong>，
                                                对 AI 的数据驱动本质和机器学习的三大类型（监督、无监督、强化）理解很到位。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mt-4">
                                <Award className="w-5 h-5 text-green-600" />
                                <span className="text-green-600 font-medium">优秀掌握</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Weaknesses Analysis */}
                <Card className="mb-8 border-l-4 border-l-orange-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-700 text-xl">
                            <AlertTriangle className="w-6 h-6" />
                            薄弱环节 (建议加强)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Neural Network Weakness */}
                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                            <div className="flex items-start gap-3 mb-4">
                                <Badge className="bg-orange-600 text-white mt-1">知识域</Badge>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-orange-800 mb-2">神经网络原理</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm font-medium text-orange-700">知识点：</p>
                                            <p className="text-gray-700 text-sm">'神经网络入门' 和 '深度神经网络原理'</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-white p-3 rounded border-l-4 border-l-red-300">
                                                <p className="text-sm font-medium text-red-700">分析：</p>
                                                <p className="text-gray-700 text-sm">
                                                    在'房价预测' 案例的测验中，关于'权重'和'偏置' 作用的题目回答错误。
                                                </p>
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-l-red-300">
                                                <p className="text-sm font-medium text-red-700">分析：</p>
                                                <p className="text-gray-700 text-sm">
                                                    在'手绘图片识别' 案例中，对'自动特征学习' 优势的理解（相较于传统特征工程）掌握不牢固。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reinforcement Learning Weakness */}
                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                            <div className="flex items-start gap-3 mb-4">
                                <Badge className="bg-orange-600 text-white mt-1">知识域</Badge>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-orange-800 mb-2">强化学习</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm font-medium text-orange-700">知识点：</p>
                                            <p className="text-gray-700 text-sm">'强化学习：基于环境交互的智能决策系统'</p>
                                        </div>
                                        <div>
                                            <div className="bg-white p-3 rounded border-l-4 border-l-red-300">
                                                <p className="text-sm font-medium text-red-700">分析：</p>
                                                <p className="text-gray-700 text-sm">
                                                    '贪吃蛇' 案例的测验题中，对'奖励机制' (Reward) 和'策略' (Policy) 的概念区分不清。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Study Recommendations */}
                <Card className="mb-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Lightbulb className="w-6 h-6" />
                            复习建议
                        </CardTitle>
                        <CardDescription className="text-purple-100">
                            基于分析结果的个性化学习建议
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-white/20 rounded-lg">
                            <Badge className="bg-red-600 text-white mt-1">1</Badge>
                            <div>
                                <h4 className="font-semibold mb-2">优先复习：</h4>
                                <p className="text-purple-100">
                                    重点回顾《神经网络入门》，确保理解'权重'和'偏置'如何共同影响决策。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-white/20 rounded-lg">
                            <Badge className="bg-yellow-600 text-white mt-1">2</Badge>
                            <div>
                                <h4 className="font-semibold mb-2">对比学习：</h4>
                                <p className="text-purple-100">
                                    结合《深度神经网络》和《特征工程》，对比理解'自动特征学习'和'人工特征工程'的区别。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-white/20 rounded-lg">
                            <Badge className="bg-blue-600 text-white mt-1">3</Badge>
                            <div>
                                <h4 className="font-semibold mb-2">强化练习：</h4>
                                <p className="text-purple-100">
                                    重新学习《强化学习》中'四要素协作' 的部分。
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <Button className="bg-green-600 hover:bg-green-700 h-12">
                        <Target className="w-4 h-4 mr-2" />
                        开始针对性复习
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 h-12">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        重新分析学习状态
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 h-12">
                        <BookOpen className="w-4 h-4 mr-2" />
                        查看详细报告
                    </Button>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    <p className="text-sm">© 2024 AI学习分析系统 - 智能化个性学习助手</p>
                </div>
            </div>
        </div>
    )
}

export default LearningAnalysis
