"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    BarChart3, BookOpen, User, Brain, Target, AlertTriangle,
    CheckCircle, Clock, Zap, TrendingUp, FileText, RefreshCw,
    Plus, Eye, PieChart, Users
} from 'lucide-react';
import Navigation from './navigation';

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

                {/* Coverage Stats */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">整体覆盖率</CardTitle>
                            <Target className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-5xl font-bold text-orange-600">64%</div>
                            <p className="text-xs text-muted-foreground">(16 / 25 个末级知识点)</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">平均题目数/知识点</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-5xl font-bold text-orange-600">3.1</div>
                            <p className="text-xs text-muted-foreground">题</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Detailed Coverage Analysis */}
                <Card className="mb-8 border-l-4 border-l-purple-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-700 text-xl">
                            <PieChart className="w-6 h-6" />
                            知识点覆盖详情
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 grid lg:grid-cols-3 gap-8">
                        {/* Well Covered */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                覆盖充分 (≥ 5 题)
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">DNN 定义与特征</span>
                                    <Badge className="bg-green-100 text-green-800">7题</Badge>
                                </li>
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">自动特征学习优势</span>
                                    <Badge className="bg-green-100 text-green-800">6题</Badge>
                                </li>
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">过拟合 (Overfitting) 定义</span>
                                    <Badge className="bg-green-100 text-green-800">5题</Badge>
                                </li>
                            </ul>
                        </div>

                        {/* Moderately Covered */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-yellow-600" />
                                覆盖中等 (1-4 题)
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">非线性建模能力</span>
                                    <Badge className="bg-yellow-100 text-yellow-800">4题</Badge>
                                </li>
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">像素输入优化</span>
                                    <Badge className="bg-yellow-100 text-yellow-800">3题</Badge>
                                </li>
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">神经元数量优化</span>
                                    <Badge className="bg-yellow-100 text-yellow-800">3题</Badge>
                                </li>
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">网络深度优化</span>
                                    <Badge className="bg-yellow-100 text-yellow-800">2题</Badge>
                                </li>
                                <li className="flex items-center justify-between p-3 rounded-md bg-white border">
                                    <span className="font-medium text-gray-700 text-sm">合理网络设计原则</span>
                                    <Badge className="bg-yellow-100 text-yellow-800">1题</Badge>
                                </li>
                            </ul>
                        </div>

                        {/* Coverage Blind Spots */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                覆盖盲点 (0 题)
                            </h3>
                            <ul className="space-y-3">
                                <li className="p-3 rounded-md bg-red-50 border-l-4 border-red-400">
                                    <span className="font-medium text-red-800 text-sm">大数据处理优势</span>
                                </li>
                                <li className="p-3 rounded-md bg-red-50 border-l-4 border-red-400">
                                    <span className="font-medium text-red-800 text-sm">灵活的结构设计能力</span>
                                </li>
                                <li className="p-3 rounded-md bg-red-50 border-l-4 border-red-400">
                                    <span className="font-medium text-red-800 text-sm">深度学习与传统 ML 的区别</span>
                                </li>
                                <li className="p-3 rounded-md bg-red-50 border-l-4 border-red-400">
                                    <span className="font-medium text-red-800 text-sm">补充模块一：激活函数</span>
                                </li>
                                <li className="p-3 rounded-md bg-red-50 border-l-4 border-red-400">
                                    <span className="font-medium text-red-800 text-sm">补充模块二：CNN/RNN 基础</span>
                                </li>
                                <li className="p-3 rounded-md bg-red-50 border-l-4 border-red-400">
                                    <span className="font-medium text-red-800 text-sm">补充模块三：NLP/CV 应用</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Improvement Suggestions */}
                <Card className="mb-8 border-l-4 border-l-indigo-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-indigo-700 text-xl">
                            <TrendingUp className="w-6 h-6" />
                            改进建议
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-6">
                        <div className="p-4 rounded-md bg-white border">
                            <div className="flex items-start gap-4">
                                <Badge className="bg-red-600 hover:bg-red-700 text-white mt-1">高优先级</Badge>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">核心模块补充</h4>
                                    <p className="text-gray-700 text-sm">
                                        建议立即为'补充模块'中的核心概念（如 CNN, RNN, ReLU）补充题目，这些是 DNN 应用的基础。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 rounded-md bg-white border">
                            <div className="flex items-start gap-4">
                                <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white mt-1">中优先级</Badge>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">对比分析补充</h4>
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

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    <p className="text-sm">© 2024 教材资源覆盖度分析系统 - AI智能教学助手</p>
                </div>
            </div>
        </div>
    )
}

export default CoverageAnalysis