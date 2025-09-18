"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Layers, Home, BarChart3, Calendar, Target, Users } from 'lucide-react'

const Navigation = () => {
    return (
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            首页
                        </Button>
                    </Link>
                    <Link href="/neural-network">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Brain className="w-4 h-4" />
                            神经网络教育
                        </Button>
                    </Link>
                    <Link href="/clustering">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            聚类分析学习
                        </Button>
                    </Link>
                    <Link href="/learning-analysis">
                        <Button variant="outline" className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            学习情况分析
                        </Button>
                    </Link>
                    <Link href="/learning-plan">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            学习规划
                        </Button>
                    </Link>
                    <Link href="/coverage-analysis">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            覆盖度分析
                        </Button>
                    </Link>
                    <Link href="/class-analysis">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            班级分析
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

export default Navigation
