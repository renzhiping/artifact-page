"use client";

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Brain, Weight, Settings, BookOpen, FlaskConical, FileText, ExternalLink } from 'lucide-react'
import Navigation from './navigation'

const NeuralNetworkEducation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Navigation />
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <Brain className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-3xl font-bold text-gray-800">神经网络入门：AI的智能决策系统</h1>
                    </div>
                    <p className="text-lg text-gray-600">了解神经元、权重和偏置的工作原理</p>
                </div>

                {/* Main Content - Markdown Style */}
                <Card className="mb-8">
                    <CardContent className="p-8">
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                根据课程教材《神经网络入门：AI的智能决策系统》的定义，<strong>神经元是信息处理的基本单元</strong>，它负责接收、处理并传递信息。
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                你提到的'权重'和'偏置'是神经元实现智能决策的关键参数：
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="text-2xl">1.</span> <Weight className="w-5 h-5 text-emerald-600" /> <strong>权重 (Weight)：</strong>
                            </h3>

                            <ul className="mb-6 space-y-2 text-gray-700">
                                <li><strong>定义：</strong> 权重是用来衡量不同输入信号对神经元输出影响"力度"的数值。</li>
                                <li><strong>作用：</strong> 它决定了每个输入信息的重要性。一个较大的权重意味着对应的输入信号对最终决策的影响更大；反之，较小的权重则影响较小。例如，在房价预测模型中，'房屋面积'的权重可能就比'房屋年龄'的权重大。</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="text-2xl">2.</span> <Settings className="w-5 h-5 text-purple-600" /> <strong>偏置 (Bias)：</strong>
                            </h3>

                            <ul className="mb-6 space-y-2 text-gray-700">
                                <li><strong>定义：</strong> 偏置是为神经元设定的一个"决策门槛"或基准激活水平。</li>
                                <li><strong>作用：</strong> 它决定了神经元被激活的难易程度。一个较高的偏置（门槛高）意味着需要更强的综合输入信号才能激活神经元；反之，较低的偏置则更容易被激活。</li>
                            </ul>

                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <Brain className="w-5 h-5" />
                                    总结一下：
                                </h3>
                                <p className="leading-relaxed">
                                    神经元会把所有<span className="font-semibold">'输入信号'</span>乘以各自的<span className="font-semibold">'权重'</span>后加起来，
                                    然后用这个总和去和<span className="font-semibold">'偏置'</span>（门槛）比较，
                                    最后通过<span className="font-semibold">'激活函数'</span>（另一个关键组件）决定最终输出什么信号。
                                </p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-orange-600" />
                                推荐测验 (巩固知识)：
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                为了检验你对'权重'、'偏置'以及'前向传播'这些核心概念的掌握程度，建议你完成以下测试卷：
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Recommendations - Image + Text Layout */}
                <div className="space-y-8">
                    {/* Test Recommendation */}
                    <Card className="border-orange-200 bg-orange-50">
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                {/* Left: Image/Icon */}
                                <div className="flex justify-center">
                                    <div className="w-32 h-32 bg-orange-100 rounded-lg flex items-center justify-center border-2 border-orange-200">
                                        <FileText className="w-16 h-16 text-orange-600" />
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="md:col-span-2 space-y-4">
                                    <h3 className="text-xl font-bold text-orange-700 flex items-center gap-2">
                                        <FileText className="w-5 h-5" />
                                        [组卷试卷] 章节测试：
                                    </h3>

                                    <ul className="space-y-2 text-gray-700">
                                        <li>• 前往「组卷试卷库」→「神经网络基础」</li>
                                        <li>• 完成试卷：<code className="bg-white px-2 py-1 rounded text-sm border">[试卷ID: NN-Foundations-01] 《神经网络入门：核心组件与原理》测验</code></li>
                                        <li className="text-sm italic text-orange-600">*（这份试卷将重点考察神经元、权重、偏置和激活函数的工作原理。）*</li>
                                    </ul>

                                    <Button className="bg-orange-600 hover:bg-orange-700" size="sm">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        前往测试中心
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Practice Recommendation */}
                    <Card className="border-green-200 bg-green-50">
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                {/* Left: Image/Icon */}
                                <div className="flex justify-center">
                                    <div className="w-32 h-32 bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-200">
                                        <FlaskConical className="w-16 h-16 text-green-600" />
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="md:col-span-2 space-y-4">
                                    <h3 className="text-xl font-bold text-green-700 flex items-center gap-2">
                                        <FlaskConical className="w-5 h-5" />
                                        [互动实验] 房价预测调参：
                                    </h3>

                                    <ul className="space-y-2 text-gray-700">
                                        <li>• 前往课程实验区，打开《神经网络入门》配套的"房价预测模型（手动调参版）"</li>
                                        <li>• <strong>任务：</strong> 针对教材中"80平米、离地铁3公里、房龄10年、真实价格300万"的案例，尝试<strong>手动调整'房屋面积'的权重</strong>和<strong>隐藏层神经元的'偏置'</strong></li>
                                        <li>• <strong>目标：</strong> 观察你调整参数后，预测价格（例如从未训练的 70.24 万）如何变化。这能让你最直观地感受到"权重"（影响力）和"偏置"（基础门槛）是如何共同作用于最终结果的。</li>
                                    </ul>

                                    <Button className="bg-green-600 hover:bg-green-700" size="sm">
                                        <FlaskConical className="w-4 h-4 mr-2" />
                                        开始实验
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    <p className="text-sm">© 2024 神经网络教育平台 - 让AI学习更简单</p>
                </div>
            </div>
        </div>
    )
}

export default NeuralNetworkEducation
