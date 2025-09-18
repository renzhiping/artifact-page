"use client";

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    BarChart3, BookOpen, User, Brain, Target, AlertTriangle,
    CheckCircle, Clock, Zap, TrendingUp, FileText, RefreshCw,
    Plus, Eye, ChevronRight, PieChart, Users
} from 'lucide-react'
import Navigation from './navigation'

const CoverageAnalysis = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <Navigation />

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <BarChart3 className="w-8 h-8 text-orange-600" />
                        <h1 className="text-3xl font-bold text-gray-800">教材资源覆盖度分析</h1>
                    </div>
                    <p className="text-lg text-gray-600">AI智能分析题库对教材知识点的覆盖情况</p>
                </div>

                {/* Teacher Question */}
                <Card className="mb-8 border-l-4 border-l-blue-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-700">
                            <Users className="w-5 h-5" />
                            教师问题
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-gray-700 italic leading-relaxed">
                                "请帮我分析一下，目前题库中的题目，对《深度神经网络：原理、优化与应用》这份教材的知识点覆盖度如何？"
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Analysis Response */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-700">
                            <Brain className="w-5 h-5" />
                            AI 分析系统
                        </CardTitle>
                        <CardDescription>正在分析教材知识图谱与题库的匹配度...</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                            好的，正在将《深度神经网络：原理、优化与应用》的知识图谱与现有题库（模拟共 50 题）进行比对分析...
                        </p>
                    </CardContent>
                </Card>

                {/* Coverage Report Artifact */}
                <Card className="mb-8 bg-gradient-to-r from-orange-500 to-red-600 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <FileText className="w-6 h-6" />
                            [Artifact] 教材知识点覆盖度分析报告
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/20 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold">整体覆盖率：</span>
                                    <span className="text-3xl font-bold">64%</span>
                                </div>
                                <p className="text-orange-100 text-sm">(16 / 25 个末级知识点)</p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold">平均题目数/知识点：</span>
                                    <span className="text-3xl font-bold">3.1</span>
                                </div>
                                <p className="text-orange-100 text-sm">题</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Visual Chart Design Concept */}
                <Card className="mb-8 border-l-4 border-l-purple-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-700">
                            <PieChart className="w-5 h-5" />
                            视觉图表设计思路
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center border-2 border-purple-300">
                                    <div className="text-center">
                                        <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                                        <p className="text-xs text-purple-600">知识图谱</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-700 italic mb-2">
                                        <strong>设计理念：</strong> 生成一个"知识图谱树状图"，用颜色深浅表示覆盖度高低。
                                    </p>
                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-green-500 rounded"></div>
                                            <span>覆盖充分</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                                            <span>覆盖中等</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-red-500 rounded"></div>
                                            <span>覆盖盲点</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Detailed Coverage Analysis */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* Well Covered */}
                    <Card className="border-l-4 border-l-green-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-700 text-lg">
                                <CheckCircle className="w-5 h-5" />
                                覆盖充分 (≥ 5 题)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="bg-green-50 p-3 rounded border border-green-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-green-800 text-sm">DNN 定义与特征</span>
                                    <Badge className="bg-green-600 text-white text-xs">7题</Badge>
                                </div>
                            </div>

                            <div className="bg-green-50 p-3 rounded border border-green-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-green-800 text-sm">自动特征学习优势</span>
                                    <Badge className="bg-green-600 text-white text-xs">6题</Badge>
                                </div>
                            </div>

                            <div className="bg-green-50 p-3 rounded border border-green-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-green-800 text-sm">过拟合 (Overfitting) 定义</span>
                                    <Badge className="bg-green-600 text-white text-xs">5题</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Moderately Covered */}
                    <Card className="border-l-4 border-l-yellow-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-yellow-700 text-lg">
                                <Clock className="w-5 h-5" />
                                覆盖中等 (1-4 题)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-yellow-800 text-sm">非线性建模能力</span>
                                    <Badge className="bg-yellow-600 text-white text-xs">4题</Badge>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-yellow-800 text-sm">像素输入优化 (66%→74.5%)</span>
                                    <Badge className="bg-yellow-600 text-white text-xs">3题</Badge>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-yellow-800 text-sm">神经元数量优化 (74.5%→82.4%)</span>
                                    <Badge className="bg-yellow-600 text-white text-xs">3题</Badge>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-yellow-800 text-sm">网络深度优化 (82.4%→83.0%)</span>
                                    <Badge className="bg-yellow-600 text-white text-xs">2题</Badge>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-yellow-800 text-sm">合理网络设计原则</span>
                                    <Badge className="bg-yellow-600 text-white text-xs">1题</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Coverage Blind Spots */}
                    <Card className="border-l-4 border-l-red-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-700 text-lg">
                                <AlertTriangle className="w-5 h-5" />
                                覆盖盲点 (0 题)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="bg-red-50 p-3 rounded border border-red-200">
                                <span className="font-medium text-red-800 text-sm">大数据处理优势</span>
                            </div>

                            <div className="bg-red-50 p-3 rounded border border-red-200">
                                <span className="font-medium text-red-800 text-sm">灵活的结构设计能力 (CNN/RNN 提及)</span>
                            </div>

                            <div className="bg-red-50 p-3 rounded border border-red-200">
                                <span className="font-medium text-red-800 text-sm">深度学习与传统 ML 的区别 (可解释性对比)</span>
                            </div>

                            <div className="bg-red-50 p-3 rounded border border-red-200">
                                <span className="font-medium text-red-800 text-sm">补充模块一：激活函数 (Sigmoid/ReLU)</span>
                            </div>

                            <div className="bg-red-50 p-3 rounded border border-red-200">
                                <span className="font-medium text-red-800 text-sm">补充模块二：CNN/RNN 基础概念</span>
                            </div>

                            <div className="bg-red-50 p-3 rounded border border-red-200">
                                <span className="font-medium text-red-800 text-sm">补充模块三：NLP/CV 应用</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Improvement Suggestions */}
                <Card className="mb-8 border-l-4 border-l-indigo-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-indigo-700 text-xl">
                            <TrendingUp className="w-6 h-6" />
                            改进建议
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <div className="flex items-start gap-3">
                                <Badge className="bg-red-600 text-white mt-1">高优先级</Badge>
                                <div>
                                    <h4 className="font-semibold text-red-800 mb-2">核心模块补充</h4>
                                    <p className="text-gray-700 text-sm">
                                        建议立即为'补充模块'中的核心概念（如 CNN, RNN, ReLU）补充题目，这些是 DNN 应用的基础。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <div className="flex items-start gap-3">
                                <Badge className="bg-yellow-600 text-white mt-1">中优先级</Badge>
                                <div>
                                    <h4 className="font-semibold text-yellow-800 mb-2">对比分析补充</h4>
                                    <p className="text-gray-700 text-sm">
                                        补充关于'大数据处理优势'和'可解释性'的对比题目。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Interactive Buttons */}
                <Card className="mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            智能交互功能
                        </CardTitle>
                        <CardDescription className="text-indigo-100">
                            一键操作，快速改进题库覆盖度
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 h-16">
                                <div className="text-center">
                                    <Plus className="w-6 h-6 mx-auto mb-1" />
                                    <span className="text-sm">一键为"覆盖盲点"自动生成推荐题目</span>
                                </div>
                            </Button>

                            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 h-16">
                                <div className="text-center">
                                    <Eye className="w-6 h-6 mx-auto mb-1" />
                                    <span className="text-sm">查看《特征工程》章节的覆盖度</span>
                                </div>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Additional Analysis Options */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <Button variant="outline" className="bg-green-50 hover:bg-green-100 border-green-300 text-green-700 h-12">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        重新分析覆盖度
                    </Button>
                    <Button variant="outline" className="bg-blue-50 hover:bg-blue-100 border-blue-300 text-blue-700 h-12">
                        <FileText className="w-4 h-4 mr-2" />
                        导出分析报告
                    </Button>
                    <Button variant="outline" className="bg-purple-50 hover:bg-purple-100 border-purple-300 text-purple-700 h-12">
                        <Target className="w-4 h-4 mr-2" />
                        设置覆盖度目标
                    </Button>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    <p className="text-sm">© 2024 教材资源覆盖度分析系统 - AI智能教学助手</p>
                </div>
            </div>
        </div>
    )
}

export default CoverageAnalysis
