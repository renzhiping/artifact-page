"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Calendar, Target, User, Brain, Video, BookOpen,
    PenTool, Lightbulb, TrendingUp, Eye, Zap,
    CheckCircle2, Play, FileText, Calculator, Trophy
} from 'lucide-react';
import Navigation from './navigation';

const LearningPlan = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <Navigation />

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <Calendar className="w-8 h-8 text-teal-600" />
                        <h1 className="text-3xl font-bold text-gray-800">AI学习规划系统</h1>
                    </div>
                    <p className="text-lg text-gray-600">个性化学习路径，深度案例分析</p>
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
                            <p className="text-gray-700 italic leading-relaxed">
                                "老师好，课程文档里提到了一个'手绘图片识别'的案例，在《深度神经网络》里准确率从 66% 优化到了 83%，在《手绘图片识别进阶》里又讲了从 40% 优化到 66%。我想完整学习一下这个案例的两种优化思路，能帮我规划一个 3 天的学习路径吗？最好还推荐看哪些资料，例如视频等，做哪些练习，我们有相关联的题目，里面有练习题和组好卷的试卷。"
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Response Introduction */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-teal-700">
                            <Brain className="w-5 h-5" />
                            AI 助手规划
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            没问题。这是一个非常好的学习目标，能让你深入理解'模型优化'（调网络）和'特征工程'（调数据）两种不同的 AI 解决思路。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            为你定制一个 3 天的'手绘图片识别案例'深度学习计划：
                        </p>
                    </CardContent>
                </Card>

                {/* Learning Plan Artifact */}
                <Card className="mb-8 bg-gradient-to-r from-teal-500 to-emerald-600 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Target className="w-6 h-6" />
                            [Artifact] "手绘图片识别"双路径优化 3 天强化学习计划
                        </CardTitle>
                        <CardDescription className="text-teal-100">
                            深度对比"人工特征工程"和"神经网络自动学习"两种优化思路
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-white/20 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5" />
                                学习目标：
                            </h3>
                            <p className="text-teal-100">
                                彻底理解 AI 如何从数据中学习，掌握两种不同的优化思路和实现方法。
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Day 1 Plan */}
                <Card className="mb-8 border-l-4 border-l-green-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-700 text-xl">
                            <Badge className="bg-green-600 text-white px-3 py-1 rounded-full">Day 1</Badge>
                            路径 A - 人工特征工程 (准确率 40% → 66%)
                        </CardTitle>
                        <CardDescription>
                            学习如何通过人工设计的特征来提升模型性能
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6">
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-green-600" />
                                核心文档
                            </h4>
                            <div className="p-4 rounded-md bg-white border">
                                <p className="text-gray-700 font-medium">《手绘图片识别进阶：混淆矩阵与特征优化》</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <Video className="w-5 h-5 text-purple-600" />
                                推荐视频 (模拟)
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 9.1] 诊断AI的"视力"：混淆矩阵 (Confusion Matrix) 详解</p>
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 9.2] 特征的魔力(上)：用"延伸度"区分笔和时钟</p>
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 9.3] 特征的魔力(下)：用"圆度"区分房子和时钟</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-blue-600" />
                                学习任务与知识点
                            </h4>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-red-600 text-white mt-1">1</Badge>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-2">诊断问题 (Why)</h5>
                                            <p className="text-sm text-gray-600 mb-3">观看 <code>[视频 9.1]</code> 并阅读文档第 2 章。</p>
                                            <div className="space-y-2 text-sm border-l-2 border-gray-200 pl-4">
                                                <p><strong>知识点：</strong> 学习如何构建和解读"混淆矩阵"。</p>
                                                <p><strong>分析：</strong> 找出基线模型（40% 准确率）的主要"混淆点"：为什么 AI 会把"笔"和"房子"误认为"时钟"？</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-yellow-600 text-white mt-1">2</Badge>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-2">解决问题 (How)</h5>
                                            <p className="text-sm text-gray-600 mb-3">观看 <code>[视频 9.2]</code> 和 <code>[视频 9.3]</code>，阅读文档第 3、4 章。</p>
                                            <div className="space-y-2 text-sm border-l-2 border-gray-200 pl-4">
                                                <p><strong>知识点：</strong> 深入理解"延伸度 (Elongation)"和"圆度 (Circularity)"这两个几何特征的数学原理和应用。</p>
                                                <p><strong>分析：</strong> 弄清为什么"延伸度"能解决"笔 vs 时钟"的混淆，"圆度"能解决"房子 vs 时钟"的混淆。</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <PenTool className="w-5 h-5 text-orange-600" />
                                练习安排
                            </h4>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-blue-600 text-white mt-1">1</Badge>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-gray-800 mb-2">[练习题] 知识点巩固</h5>
                                            <ul className="space-y-2 text-sm list-disc list-inside text-gray-600">
                                                <li>前往「练习题库」→「第9章：手绘图片识别进阶」</li>
                                                <li>完成"混淆矩阵解读"练习（共 5 题）</li>
                                                <li>完成"特征原理"计算题（共 3 题，手动计算给定图形的延伸度和圆度）</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-purple-600 text-white mt-1">2</Badge>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-gray-800 mb-2">[思考题]</h5>
                                            <div className="bg-yellow-50 p-3 rounded border-l-4 border-l-yellow-400">
                                                <p className="text-sm text-gray-700 italic">
                                                    为什么在文档第 5.6 节中，加入了所有特征（包括圆度、延伸度等）后，"鱼"和"自行车"的混淆问题仍然没有被很好地解决？
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Day 2 Plan */}
                <Card className="mb-8 border-l-4 border-l-blue-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-700 text-xl">
                            <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full">Day 2</Badge>
                            路径 B - 神经网络优化 (准确率 66% → 83%)
                        </CardTitle>
                        <CardDescription>
                            学习深度神经网络如何通过自动特征学习提升性能
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6">
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                                核心文档
                            </h4>
                            <div className="p-4 rounded-md bg-white border">
                                <p className="text-gray-700 font-medium">《深度神经网络：原理、优化与应用》</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <Video className="w-5 h-5 text-purple-600" />
                                推荐视频 (模拟)
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 10.1] 优化的第一步：告别人造特征，拥抱像素输入</p>
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 10.2] 扩充"大脑容量"：增加神经元数量</p>
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 10.3] 增加"思考深度"：构建多层神经网络</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-blue-600" />
                                学习任务与知识点
                            </h4>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-red-600 text-white mt-1">1</Badge>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-2">优化一 (输入)</h5>
                                            <p className="text-sm text-gray-600 mb-3">观看 <code>[视频 10.1]</code> 并阅读文档第 2 章。</p>
                                            <div className="space-y-2 text-sm border-l-2 border-gray-200 pl-4">
                                                <p><strong>知识点：</strong> 理解从 5 个"人工特征"输入转变为 400 个"像素"输入的原理。</p>
                                                <p><strong>分析：</strong> 为什么这次转变能让准确率从 66% 提升到 74.5%？（提示：信息量的巨大差异）</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-yellow-600 text-white mt-1">2</Badge>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-2">优化二 (宽度)</h5>
                                            <p className="text-sm text-gray-600 mb-3">观看 <code>[视频 10.2]</code> 并阅读文档第 3 章。</p>
                                            <div className="space-y-2 text-sm border-l-2 border-gray-200 pl-4">
                                                <p><strong>知识点：</strong> 理解增加隐藏层"神经元数量"（从 10 个到 100 个）对网络容量的影响。</p>
                                                <p><strong>分析：</strong> 这次提升（74.5% → 82.4%）背后的原因是网络有了更强的"非线性建模能力"。</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-purple-600 text-white mt-1">3</Badge>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-2">优化三 (深度)</h5>
                                            <p className="text-sm text-gray-600 mb-3">观看 <code>[视频 10.3]</code> 并阅读文档第 4 章。</p>
                                            <div className="space-y-2 text-sm border-l-2 border-gray-200 pl-4">
                                                <p><strong>知识点：</strong> 理解从单隐藏层变为双隐藏层（增加"网络深度"）的意义。</p>
                                                <p><strong>分析：</strong> 为什么这次提升（82.4% → 83.0%）幅度很小？这引出了"过拟合"和"边际效应"的概念。</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <PenTool className="w-5 h-5 text-orange-600" />
                                练习安排
                            </h4>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-blue-600 text-white mt-1">1</Badge>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-gray-800 mb-2">[组卷试卷] 章节测试</h5>
                                            <ul className="space-y-2 text-sm list-disc list-inside text-gray-600">
                                                <li>前往「组卷试卷库」→「神经网络与深度学习」</li>
                                                <li>完成试卷 <code className="bg-gray-100 px-1 rounded">[试卷ID: DL-HW-03] 《深度神经网络优化》章节测验</code></li>
                                                <li className="text-xs italic text-orange-600 mt-1">*（这份试卷包含了关于像素输入、网络宽度和深度的对比题）。*</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Day 3 Plan */}
                <Card className="mb-8 border-l-4 border-l-purple-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-700 text-xl">
                            <Badge className="bg-purple-600 text-white px-3 py-1 rounded-full">Day 3</Badge>
                            总结、对比与拓展
                        </CardTitle>
                        <CardDescription>
                            深度对比两种优化思路，全面理解AI解决问题的哲学
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6">
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-purple-600" />
                                核心文档
                            </h4>
                            <ul className="space-y-3">
                                <li className="p-4 rounded-md bg-white border">
                                    <p className="text-gray-700 font-medium">《特征工程：数据预处理的艺术与科学》</p>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <p className="text-gray-700 font-medium">《机器学习》</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <Video className="w-5 h-5 text-indigo-600" />
                                推荐视频 (模拟)
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 6.1] 什么是特征工程：以"房价预测"为例</p>
                                </li>
                                <li className="flex items-center gap-3 p-4 rounded-md bg-white border">
                                    <Play className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                    <p className="font-medium text-gray-800">[视频 12.1] 总结：AI 解决问题的两种哲学</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-blue-600" />
                                学习任务与知识点
                            </h4>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-indigo-600 text-white mt-1">1</Badge>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-2">对比反思 (Paths A vs B)</h5>
                                            <div className="space-y-2 text-sm border-l-2 border-gray-200 pl-4">
                                                <p><strong>知识点：</strong> 总结路径 A（人工特征工程）和路径 B（深度学习自动特征学习）的优缺点。</p>
                                                <p><strong>思考：</strong> 路径 A 的优点是"可解释性"强，缺点是依赖"专家经验"且"扩展性差"。路径 B 的优点是"自动学习"且"性能上限高"，缺点是需要"大量数据"且"可解释性差"。</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-teal-600 text-white mt-1">2</Badge>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-2">知识拓展</h5>
                                            <div className="space-y-2 text-sm border-l-2 border-gray-200 pl-4">
                                                <p><strong>知识点：</strong> 回顾《特征工程》中的"房价预测"案例。思考"房屋年龄"（由"建造年份"计算而来）这个特征，是属于人工特征还是自动特征？</p>
                                                <p><strong>知识点：</strong> 回顾《机器学习》中的"监督学习"定义，思考这两个优化路径都属于监督学习吗？（是的，因为它们都有明确的标签——图片是"汽车"、"鱼"等）。</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
                                <PenTool className="w-5 h-5 text-orange-600" />
                                练习安排
                            </h4>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-green-600 text-white mt-1">1</Badge>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-gray-800 mb-2">[练习题] 综合应用</h5>
                                            <ul className="space-y-2 text-sm list-disc list-inside text-gray-600">
                                                <li>前往「练习题库」→「综合应用题」</li>
                                                <li>完成简答题："请结合'手绘图片识别'案例，论述《AI 智能源于数据》这一观点的正确性。"</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-purple-600 text-white mt-1">2</Badge>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-gray-800 mb-2">[组卷试卷] 知识域总览</h5>
                                            <ul className="space-y-2 text-sm list-disc list-inside text-gray-600">
                                                <li>前往「组卷试卷库」→「期中综合测试」</li>
                                                <li>尝试完成 <code className="bg-gray-100 px-1 rounded">[试卷ID: Midterm-01] 《AI 基础与机器学习》综合试卷</code>，检验你对监督学习、特征工程和神经网络之间关系的理解。</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Conclusion */}
                <Card className="mb-8 bg-gradient-to-r from-green-500 to-teal-600 text-white">
                    <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                            <Trophy className="w-8 h-8" />
                            学习成果
                        </h3>
                        <p className="text-green-100 text-lg leading-relaxed">
                            祝你学习顺利！这个计划强度较高，但完成后你对 AI 的理解会更上一层楼。
                        </p>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <Button className="bg-green-600 hover:bg-green-700 h-12">
                        <Play className="w-4 h-4 mr-2" />
                        开始 Day 1
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 h-12">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        开始 Day 2
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 h-12">
                        <Target className="w-4 h-4 mr-2" />
                        开始 Day 3
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700 h-12">
                        <BookOpen className="w-4 h-4 mr-2" />
                        查看资料库
                    </Button>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    <p className="text-sm">© 2024 AI学习规划系统 - 个性化深度学习路径</p>
                </div>
            </div>
        </div>
    )
}

export default LearningPlan