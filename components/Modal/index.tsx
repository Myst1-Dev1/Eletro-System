import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    maxWidth?: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, setIsOpen, maxWidth, children }: ModalProps) {
    useGSAP(() => {
        gsap.fromTo(".modal-body", {
            opacity: 0,
            scale: 0.4,
            duration: 0.5,
            ease: "power3.out"
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out"
        });
    }, [isOpen]);

    return (
        <>
            {isOpen &&
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
                    <div className={`modal-body relative rounded-lg ${maxWidth} w-full`}>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}