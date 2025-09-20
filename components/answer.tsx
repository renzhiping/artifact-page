"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Weight, Settings, BookOpen, FlaskConical, FileText, ExternalLink } from 'lucide-react';
import Navigation from './navigation';

const NeuralNetworkEducation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Navigation />
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <Brain className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-3xl font-bold text-gray-800">知识问答</h1>
                    </div>
                    <p className="text-lg text-gray-600">了解神经元、权重和偏置的工作原理</p>
                </div>

                {/* Main Content */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-indigo-700">神经元、权重与偏置</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                            根据课程教材《神经网络入门：AI的智能决策系统》的定义，<strong>神经元是信息处理的基本单元</strong>，它负责接收、处理并传递信息。你提到的'权重'和'偏置'是神经元实现智能决策的关键参数：
                        </p>

                        <div>
                            <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center gap-2">
                                <Weight className="w-5 h-5 text-emerald-600" />
                                1. 权重 (Weight)
                            </h3>
                            <div className="pl-7 space-y-2 text-gray-600 border-l-2 border-gray-200 ml-2.5">
                                <p><strong>定义：</strong> 权重是用来衡量不同输入信号对神经元输出影响"力度"的数值。</p>
                                <p><strong>作用：</strong> 它决定了每个输入信息的重要性。一个较大的权重意味着对应的输入信号对最终决策的影响更大；反之，较小的权重则影响较小。例如，在房价预测模型中，'房屋面积'的权重可能就比'房屋年龄'的权重大。</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-purple-600" />
                                2. 偏置 (Bias)
                            </h3>
                            <div className="pl-7 space-y-2 text-gray-600 border-l-2 border-gray-200 ml-2.5">
                                <p><strong>定义：</strong> 偏置是为神经元设定的一个"决策门槛"或基准激活水平。</p>
                                <p><strong>作用：</strong> 它决定了神经元被激活的难易程度。一个较高的偏置（门槛高）意味着需要更强的综合输入信号才能激活神经元；反之，较低的偏置则更容易被激活。</p>
                            </div>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                                <Brain className="w-5 h-5" />
                                总结
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                神经元会把所有<strong className="text-indigo-700">'输入信号'</strong>乘以各自的<strong className="text-emerald-700">'权重'</strong>后加起来，然后用这个总和去和<strong className="text-purple-700">'偏置'</strong>（门槛）比较，最后通过<strong className="text-orange-700">'激活函数'</strong>（另一个关键组件）决定最终输出什么信号。
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Recommendations */}
                <Card className="mb-8 border-l-4 border-l-teal-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-teal-700 text-xl">
                            <FlaskConical className="w-6 h-6" />
                            巩固与实践
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="p-4 rounded-md bg-white border">
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-orange-600" />
                                [组卷试卷] 章节测试
                            </h4>
                            <ul className="space-y-2 text-sm list-disc list-inside text-gray-600 pl-2 mb-4">
                                <li>前往「组卷试卷库」→「神经网络基础」</li>
                                <li>完成试卷：<code className="bg-gray-100 px-1 rounded">[试卷ID: NN-Foundations-01] 《神经网络入门：核心组件与原理》测验</code></li>
                                <li className="text-xs italic text-orange-600">*（这份试卷将重点考察神经元、权重、偏置和激活函数的工作原理。）*</li>
                            </ul>
                            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:text-orange-800">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                前往测试中心
                            </Button>
                        </div>

                        <div className="p-4 rounded-md bg-white border">
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <FlaskConical className="w-5 h-5 text-green-600" />
                                [互动实验] 房价预测调参
                            </h4>
                            <ul className="space-y-2 text-sm list-disc list-inside text-gray-600 pl-2 mb-4">
                                <li>前往课程实验区，打开《神经网络入门》配套的"房价预测模型（手动调参版）"</li>
                                <li><strong>任务：</strong> 针对教材中"80平米、离地铁3公里、房龄10年、真实价格300万"的案例，尝试<strong>手动调整'房屋面积'的权重</strong>和<strong>隐藏层神经元的'偏置'</strong></li>
                                <li><strong>目标：</strong> 观察你调整参数后，预测价格如何变化，直观感受"权重"和"偏置"的作用。</li>
                            </ul>
                            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 hover:text-green-800">
                                <FlaskConical className="w-4 h-4 mr-2" />
                                开始实验
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    <p className="text-sm">© 2024 神经网络教育平台 - 让AI学习更简单</p>
                </div>
            </div>
        </div>
    )
}

export default NeuralNetworkEducation