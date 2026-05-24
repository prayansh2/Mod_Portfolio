import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';

import './CardContainer.css';
import c1 from '../images/bk.jpg'
import Button from '../Small/Button'
import g2 from '../images/g1.png'
const Item = ({ id, title, subtitle, onClick }) => (
  <motion.div
    className="item"
    key={id}
    layoutId={id.toString()}
  
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
  >
   <div className="pro-img">
    <img src={c1} alt="" />
    <div className='title'>
    <h1>{title}</h1>
    <div className="down">
    <i class="fa-brands fa-github"></i>
    <i class="fa-solid fa-arrow-right" onClick={onClick}></i>
    </div>
    </div>
   </div>
  </motion.div>
);

export default function CardContainer() {
  const [selectedId, setSelectedId] = useState(null);

  const items = useMemo(
    () => [
      { id: 1, title: 'Blog Application', subtitle: 'Subtitle 1' },
      { id: 2, title: 'Landing Pages', subtitle: 'Subtitle 2' },
      { id: 3, title: 'React Website', subtitle: 'Subtitle 3' },
      { id: 4, title: 'Bank Management', subtitle: 'Subtitle 4' },
      { id: 5, title: 'FULL STACK-APP', subtitle: 'Subtitle 5' },
      { id: 6, title: 'Node Project', subtitle: 'Subtitle 6' },
    ],
    []
  );

  return (
    <LayoutGroup>
      <ul className="gallery">
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            onClick={() => setSelectedId(item.id)}
          />
        ))}
      </ul>
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              className="backdrop"
              key="backdrop"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            <motion.div
              className="modal-container"
              key="modal"
            >
              <motion.div
                className="modal change"
                layoutId={selectedId.toString()}
                // initial={{ width: 200, height: 150 }}
                // animate={{ width: 1000, height: 600 }}
                exit={{ width: 200, height: 150 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                 <i className="fa-solid fa-x pro-abs" onClick={() => setSelectedId(null)}></i>
            <div className="pro-main">
            <div className="left">
             <div className="img2">
              <img src={c1} alt="" />
              
              </div>
             </div>
             <div className="right">
              <h1>{ items[selectedId-1].title }</h1>
              <i className="fa-solid fa-x pro-abs" onClick={() => setSelectedId(null)}></i>
             
              <h2>Tech-stack</h2>
              <div className="tach-stack">
                <img src={c1} alt="" />
                <img src={c1} alt="" />
                <img src={c1} alt="" />
                <img src={c1} alt="" />
                <img src={c1} alt="" />
              </div>
                <div className="source-code">
                  <h2>Source -code</h2>
                  <div className="code ">
                    
                    <Button text="Github" img={g2}></Button>
                    <Button text="Preview" icon='fa-solid fa-play'></Button>
                </div>
                </div>
             </div>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat, illum quaerat sapiente ducimus qui asperiores! Aut ea ipsum debitis ad dicta iusto necessitatibus explicabo provident accusamus architecto nisi alias perspiciatis velit doloribus voluptate in magni illum fugit aliquid impedit et, laboriosam perferendis! Consequuntur, fuga ut. Blanditiis quis, odio nulla illo obcaecati nesciunt suscipit fuga magni laboriosam! Doloremque quis quos, culpa soluta minus nulla itaque reprehenderit officiis quasi enim recusandae sequi. Impedit aut laborum illum eligendi eum, ea laudantium assumenda architecto atque at totam sed, quam quibusdam fugit nesciunt? Atque unde perspiciatis minima distinctio quam consequatur repudiandae eum ullam reiciendis!
              </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
