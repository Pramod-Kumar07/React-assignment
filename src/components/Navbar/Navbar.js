import React, {Fragment, useRef} from 'react';
import { FcDocument } from 'react-icons/fc'; 
import { MdFormatItalic, MdFormatLineSpacing, MdOutlineChecklist, MdOutlineInsertComment, MdOutlineLock, MdOutlineSpellcheck } from 'react-icons/md';
import { BiAlignJustify, BiAlignLeft, BiAlignMiddle, BiAlignRight, BiCommentAdd, BiDotsVerticalRounded, BiImage, BiRedo, BiUndo, BiVideo } from 'react-icons/bi';
import { IoMdArrowDropdown, IoMdLink } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FaHighlighter } from 'react-icons/fa';
import { TfiPaintRoller } from 'react-icons/tfi';
import { AiOutlineFontColors, AiOutlinePrinter, AiOutlineStar } from 'react-icons/ai';
import { RiPencilLine } from 'react-icons/ri';
import { BsTypeUnderline } from 'react-icons/bs';
import { VscListOrdered } from 'react-icons/vsc';
import { HiListBullet } from 'react-icons/hi2';
import styles from './Navbar.module.css';

function Navbar() {

    const pageRef = useRef(null);

    const handleClickBold = () => {
        document.execCommand("bold", false, null);        
      };

    const handleClickItalic = () => {
        document.execCommand("italic", false, null);
    };

    const handleUndo = () => {
        document.execCommand("undo", false, null);
    }

    const handleRedo = () => {
        document.execCommand("redo", false, null);
    }

    const handleUnderline = () => {
        document.execCommand("underline", false, null);
    } 

  return (
    <Fragment>
    <div className={styles.main}>
        <div className={styles.doc}>
            <FcDocument className={styles.docIcon}/>
        </div>
        <div className={styles.optionContainer}>
            <div className={styles.untitled}>
                <div className={styles.text}> Untitled document </div>
                <div className={styles.star}><AiOutlineStar/></div>
            </div>
            <div className={styles.options}>
                <span>File</span>
                <span>Edit</span>
                <span>view</span>
                <span>Insert</span>
                <span>Format</span>
                <span>Tools</span>
                <span>Extensions</span>
                <span>Help</span>
            </div>
        </div>
            <div className={styles.icons}>
                <span className={styles.comment}><MdOutlineInsertComment/></span>
                <span className={styles.video}><BiVideo/><span><IoMdArrowDropdown/></span></span>
                <span className={styles.share}><MdOutlineLock/> <span>Share</span> </span>
                <span className={styles.profile}><CgProfile/></span>
            </div>
    </div>
    <div>
        <div className={styles.optionBar}>
            <span onClick={handleUndo}><BiUndo/></span>
            <span onClick={handleRedo}><BiRedo/></span>
            <span><AiOutlinePrinter/></span>
            <span><MdOutlineSpellcheck/></span>
            <span><TfiPaintRoller/></span>
            <span>
                <select>
                    <option value="none">100%</option>
                    <option>Fit</option>
                    <option>50%</option>
                    <option>75%</option>
                    <option>90%</option>
                    <option>100%</option>
                    <option>125%</option>                    
                    <option>150%</option>
                    <option>200%</option>
                </select>
            </span>
            <span className={styles.vertical}>|</span>
            <select>
                <option>Normal text</option>
            </select>
            <span className={styles.vertical}>|</span>
            <select>
                <option>Arial</option>
            </select>
            <span className={styles.vertical}>|</span>
            <span>-</span>
            <span className={styles.fontsize}>11</span>
            <span>+</span>
            <span className={styles.vertical}>|</span>
            <span onClick={handleClickBold}>B</span>
            <span onClick={handleClickItalic}><MdFormatItalic/></span>
            <span onClick={handleUnderline}><BsTypeUnderline/></span>
            <span><AiOutlineFontColors/></span>
            <span><FaHighlighter/></span>
            <span className={styles.vertical}>|</span>
            <span><IoMdLink/></span>
            <span><BiCommentAdd/></span>
            <span><BiImage/></span>
            <span className={styles.vertical}>|</span>
            <span>
            <BiAlignLeft/>
                {/* <select>
                    <option><BiAlignLeft/></option>
                    <option><BiAlignMiddle/></option>
                    <option><BiAlignRight/></option>
                    <option><BiAlignJustify/></option>
                </select> */}
            </span>
            <span><MdFormatLineSpacing/></span>
            <span><MdOutlineChecklist/></span>
            <span><HiListBullet/></span>
            <span><VscListOrdered/></span>
                <span><BiDotsVerticalRounded/></span>
                <span><RiPencilLine/></span>
                <span><IoMdArrowDropdown/></span>
        </div>
    </div>
    <div className={styles.pageContainer}>
        <div 
            contentEditable='true' 
            className={styles.page}
            ref={pageRef}>
        </div>
    </div>
    </Fragment>
  )
}

export default Navbar