"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Layers, BookOpen, Play, PenTool, GraduationCap,
    Globe, FileText, Video, ExternalLink, Lightbulb,
    Target
} from 'lucide-react';
import Navigation from './navigation';

const ClusteringAnalysis = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <Navigation />
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <Layers className="w-8 h-8 text-teal-600" />
                        <h1 className="text-3xl font-bold text-gray-800">学习资源推荐</h1>
                    </div>
                    <p className="text-lg text-gray-600">无监督学习中的核心应用 - 数据自主分组与发现</p>
                </div>

                {/* Introduction */}
                <Card className="mb-8">
                    <CardContent className="p-8">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>'聚类分析'</strong>是<strong>'无监督学习'</strong>中的一个核心应用，目标是根据样本的相似性自动将其分组，使得同一组内的样本尽可能相似，不同组之间的样本尽可能不同。为了帮助你深入理解，我从课程库和互联网为你筛选了以下资源：
                        </p>
                    </CardContent>
                </Card>

                {/* Internal Resources */}
                <Card className="mb-8 border-l-4 border-l-teal-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-teal-700 text-2xl">
                            <GraduationCap className="w-7 h-7" />
                            课程内部资源 (平台精选)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                                核心教材 (必读)
                            </h3>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-blue-600 text-white mt-1">1</Badge>
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2">[教材] 《无监督学习：数据中的自主发现之道》</h4>
                                            <p className="text-gray-700 text-sm">
                                                <strong>简介：</strong> 深度学习的基石。第 2.2 节详细讲解了 'K-means 聚类算法' 的数学基础和执行步骤。第 3.1 节介绍了它在'手机相册自动分类'等场景的应用。"补充模块一"还拓展了'层次聚类'和'DBSCAN'这两种更高级的聚类方法。
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-blue-600 text-white mt-1">2</Badge>
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2">[教材] 《机器学习》</h4>
                                            <p className="text-gray-700 text-sm">
                                                <strong>简介：</strong> 本课程的导论部分。第 6.2 节和 6.2.2 节概述了无监督学习的定义，并预览了聚类在图片分类和图像分割中的应用。
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-start gap-3">
                                        <Badge className="bg-blue-600 text-white mt-1">3</Badge>
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2">[教材] 《特征工程：数据预处理的艺术与科学》</h4>
                                            <p className="text-gray-700 text-sm">
                                                <strong>简介：</strong> '降维'是无监督学习的另一大应用。本文档的第 5 章详细讲解了'主成分分析 (PCA)'，它常用于数据可视化，是理解聚类结果的好帮手。
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Play className="w-5 h-5 text-purple-600" />
                                配套视频 (推荐观看)
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Video className="w-4 h-4 text-purple-600" />
                                        <h4 className="font-semibold text-purple-800">[内部视频 8.1] 动画精讲：K-means 的迭代原理</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> (模拟资源) 本视频动态演示了 K-means 算法第 2.2 节中的'样本分配'和'中心更新'是如何交替迭代直至收敛的。
                                    </p>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Video className="w-4 h-4 text-purple-600" />
                                        <h4 className="font-semibold text-purple-800">[内部视频 8.2] 案例分析：DBSCAN 与层次聚类</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> (模拟资源) 对应教材 '补充模块一'，本视频对比了 K-means 无法处理非球形数据时，DBSCAN 如何胜任。
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <PenTool className="w-5 h-5 text-orange-600" />
                                实践练习
                            </h3>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="w-4 h-4 text-orange-600" />
                                        <h4 className="font-semibold text-orange-800">[练习题库] K-means 算法练习题</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> (模拟资源) 包含 5 道选择题和 2 道计算题，帮助你巩固 K-means 的迭代步骤。
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* External Resources */}
                <Card className="mb-8 border-l-4 border-l-emerald-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-emerald-700 text-2xl">
                            <Globe className="w-7 h-7" />
                            互联网精选资源 (拓展学习)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Video className="w-5 h-5 text-red-600" />
                                [推荐视频 (权威课程)]
                            </h3>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className="text-red-700 border-red-300">检索结果</Badge>
                                        <h4 className="font-semibold text-red-800">Stanford CS229 讲座 (吴恩达): K-Means 与 EM 算法</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> 如果你想深入理解 K-means 背后的数学原理（例如它与 EM 算法的关系），这是最经典的学术视频之一。
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-indigo-600" />
                                [推荐图书 (专业书籍)]
                            </h3>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className="text-indigo-700 border-indigo-300">检索结果</Badge>
                                        <h4 className="font-semibold text-indigo-800">《Pattern Recognition and Machine Learning》 (Bishop 著)</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> AI 领域的经典"圣经"。该书第 9 章详细讨论了 K-Means 和混合高斯模型等聚类方法。
                                    </p>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className="text-indigo-700 border-indigo-300">检索结果</Badge>
                                        <h4 className="font-semibold text-indigo-800">《Python 机器学习实战：基于 Scikit-Learn, Keras 和 TensorFlow》 (A. Géron 著)</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> 适合实践的"动手书"。第 9 章详细介绍了如何在 Python 中使用 Scikit-Learn 实现 K-Means, DBSCAN 等多种聚类算法。
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-green-600" />
                                [推荐博客/文本资源 (代码与实践)]
                            </h3>
                            <ul className="space-y-4">
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className="text-green-700 border-green-300">检索结果</Badge>
                                        <h4 className="font-semibold text-green-800">Scikit-Learn 官方文档: Clustering 算法比较</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> 这是一个非常有价值的资源，它用统一的可视化方式展示了 K-Means, DBSCAN, 层次聚类等近 10 种不同算法在不同数据分布上的表现，非常直观。
                                    </p>
                                </li>
                                <li className="p-4 rounded-md bg-white border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline" className="text-green-700 border-green-300">检索结果</Badge>
                                        <h4 className="font-semibold text-green-800">[博客] Towards Data Science: "Understanding DBSCAN Algorithm"</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>简介：</strong> 这篇博客图文并茂地解释了为什么你需要 DBSCAN（对应我们内部教材补充模块的内容），以及它如何解决 K-means 无法解决的任意形状聚类问题。
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Call to Action */}
                <Card className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-center">
                    <CardContent className="p-8">
                        <Lightbulb className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">开始你的聚类学习之旅！</h3>
                        <p className="text-teal-100 mb-4">
                            希望这些资源能帮你构建一个完整的知识体系！学习愉快。
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button variant="outline" className="bg-white text-teal-700 hover:bg-gray-100">
                                <BookOpen className="w-4 h-4 mr-2" />
                                开始学习教材
                            </Button>
                            <Button variant="outline" className="bg-white text-teal-700 hover:bg-gray-100">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                浏览外部资源
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    <p className="text-sm">© 2024 机器学习教育平台 - 让无监督学习更简单</p>
                </div>
            </div>
        </div>
    )
}

export default ClusteringAnalysis