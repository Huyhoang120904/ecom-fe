"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) { useEffect(() => {}, []); return <div className="container"><div className="success-card"><p className="eyebrow">Có lỗi xảy ra</p><h1>Chúng tôi sẽ quay lại ngay.</h1><p>Không thể tải nội dung lúc này. Hãy thử lại sau một chút nhé.</p><Button onClick={() => reset()}>Thử lại</Button></div></div>; }
