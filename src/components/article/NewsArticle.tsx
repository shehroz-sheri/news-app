import React, { useRef, useState } from 'react';
import { Modal } from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { Article } from '../../redux/slices/newsSlice';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { CiBookmark } from "react-icons/ci";
import { IoBookmark, IoShareOutline } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";



interface ArticleModalProps {
    article: Article | null;
    onClose: () => void;
}


export const NewsArticle: React.FC<ArticleModalProps> = ({ article, onClose }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isSaved, setIsSaved] = useState<boolean>(false)

    const [disabled, setDisabled] = useState<boolean>(true);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement>(null);


    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    if (!article) return null;

    return (
        <>
            <Modal
                title={
                    <div
                        style={{
                            width: '95%',
                            cursor: 'move',
                        }}
                        onMouseOver={() => {
                            if (disabled) {
                                setDisabled(false);
                            }
                        }}
                        onMouseOut={() => {
                            setDisabled(true);
                        }}
                        onFocus={() => { }}
                        onBlur={() => { }}
                    >
                        &nbsp;
                    </div>
                }
                open={true}
                onCancel={onClose}
                footer={null}
                destroyOnClose={true}
                width={'90%'}
                modalRender={(modal) => (
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        nodeRef={draggleRef}
                        onStart={(event, uiData) => onStart(event, uiData)}
                    >
                        <div ref={draggleRef}>{modal}</div>
                    </Draggable>
                )}
            >
                <article className='grid sm:grid-cols-2 sm:gap-10 pb-2'>
                    <div className="">
                        <img src={article?.imageUrl || `https://placehold.co/4000x4000?text=${article?.title}`} alt={article?.title} className="max-h-60 md:max-h-96 w-full object-cover" />
                    </div>
                    <div className="grid items-center">
                        <div className="sm:text-dark max-sm:mt-3 sm:flex sm:items-center px-1">
                            <div>
                                <div className="flex justify-between my-1 sm:my-3">
                                    <p className='text-danger text-md font-bold'>Trending</p>
                                    <div className='flex justify-center gap-4 max-sm:hidden'>
                                        <p className='cursor-pointer flex items-center'>
                                            {!isLiked ? <IoIosHeartEmpty onClick={() => setIsLiked(true)} /> : <IoIosHeart onClick={() => setIsLiked(false)} color='red' />}
                                        </p>
                                        <p className='cursor-pointer flex items-center'>
                                            <IoShareOutline />
                                        </p>
                                        <p className='cursor-pointer flex items-center'>
                                            {!isSaved ? <CiBookmark onClick={() => setIsSaved(true)} /> : <IoBookmark onClick={() => setIsSaved(false)} />}
                                        </p>
                                    </div>
                                </div>
                                <Link to={article?.url} target='_blank' className='font-serif font-medium sm:font-semibold text-xl sm:text-2xl sm:text-dark sm:hover:text-danger'>{article?.title}</Link>
                                <div className=''>
                                    <p className="text-dark/80 w-[90%] gap-y-1 overflow-hidden leading-5 text-sm my-4">{article?.fullDescription}</p>
                                    <div className='flex sm:gap-10 max-sm:flex-col max-sm:gap-1 max-sm:items-center text-xs'>
                                        <p>{formatDistanceToNow(new Date(article?.publishedAt))} ago</p>
                                        <p className='text-secondary/80 max-sm:text-[10.5px]'>{article?.author} &nbsp; | &nbsp; 4min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
            </Modal>
        </>
    )
}
